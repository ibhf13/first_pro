import { userValidationSchema } from '../validation/userValidation.js'
import User from '../models/User.js'

// Example route handler
router.post('/register', async (req, res) => {
  try {
    // ✅ Validate input using Yup
    await userValidationSchema.validate(req.body, { abortEarly: false })

    const { username, email, password } = req.body

    // ❌ Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already in use' })
    }

    // ✅ Create new user (password gets hashed automatically)
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
})
