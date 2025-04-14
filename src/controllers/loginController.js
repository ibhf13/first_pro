// src/controllers/authController.js
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import { comparePassword } from '../utils/passwordUtils.js'
import { generateToken } from '../utils/jwtUtils.js'

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' })
    }

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    const isMatch = await comparePassword(password, user.password)
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    // ✅ Generate JWT token
   
    const token = generateToken({ id: user._id, email: user.email })

    // 🧼 Remove password before sending response
    const { password: _, ...userData } = user.toObject()

    res.status(200).json({
      message: 'Login successful',
      token,
      user: userData,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
}
