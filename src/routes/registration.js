import { Router } from 'express'
import { userValidationSchema } from '../validation/userValidation.js'
import User from '../models/User.js'

const router = Router()

// 📝 Register Route
router.post('/', async (req, res) => {
  try {
    await userValidationSchema.validate(req.body, { abortEarly: false })

    const { username, email, password } = req.body

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already in use' })
    }

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

export default router
