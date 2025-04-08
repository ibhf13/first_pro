import bcrypt from 'bcrypt'

// 🔒 Hash password
export const hashPassword = async (plainPassword) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(plainPassword, salt)
}

// 🔐 Compare plain password with hash
export const comparePassword = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword)
}

// ✅ Check password strength
export const isPasswordStrong = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/
  return regex.test(password)
}
