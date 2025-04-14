import { Router } from 'express'
import { authenticate } from '../middleware/authMiddleware.js'

const router = Router()

router.get('/protected', authenticate, (req, res) => {
  res.json({ message: `Hello ${req.user.email}, this is a protected route!` })
})

export default router
