// src/controllers/authController.js
import { userValidationSchema } from '../validation/userValidation.js'
import User from '../models/User.js'
import { isPasswordStrong } from '../utils/passwordUtils.js' // Removed hashPassword

export const registerUser = async (req, res) => {
  try {
    await userValidationSchema.validate(req.body, { abortEarly: false })

    const { username, email, password } = req.body

    if (!isPasswordStrong(password)) {
      return res.status(400).json({ message: 'Password is not strong enough' })
    }

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already in use' })
    }

    // 🔥 Do NOT hash password manually — let Mongoose pre-save hook do it
    const newUser = new User({ username, email, password })
    await newUser.save()

    res.status(201).json({ message: 'User registered successfully' })
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ errors: error.errors })
    }
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
}
