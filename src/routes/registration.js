// src/routes/registration.js
import { Router } from 'express'
import { registerUser } from '../controllers/authController.js'
import { loginUser } from '../controllers/loginController.js'
import { comparePassword, hashPassword, isPasswordStrong } from '../utils/passwordUtils.js'

const router = Router()

// ✅ Use controller for register
router.post('/', registerUser)
router.post('/login', loginUser)

router.get('/test', async (req, res) => {
  const testPassword = 'StrongPass123!'
  const isStrong = isPasswordStrong(testPassword)
  const hashed = await hashPassword(testPassword)
  const isMatch = await comparePassword(testPassword, hashed)

  res.json({ password: testPassword, isStrong, hashed, isMatch })
})


// 🔍 Optional: test route for password functions
router.get('/test', async (req, res) => {
  const testPassword = 'StrongPass123!'
  const isStrong = isPasswordStrong(testPassword)
  const hashed = await hashPassword(testPassword)
  const isMatch = await comparePassword(testPassword, hashed)

  res.json({ password: testPassword, isStrong, hashed, isMatch })
})

export default router
