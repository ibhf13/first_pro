import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRES_IN = '1h' // Optional: kannst du auf '7d' etc. setzen

// 🔐 Token generieren
export const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
}

// ✅ Token validieren
export const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET)
}
