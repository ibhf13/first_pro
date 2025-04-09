import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import connectToDatabase from './config/database.js'
import auth from './routes/auth.js'
import healthRouter from './routes/health.js'

dotenv.config()
const app = express()


connectToDatabase()
app.use(express.json())
app.use(cors({
    origin: true,
    credentials: true,
}))


// Routes
app.get('/', (req, res) => {
    res.status(200).json({ message: 'API is running successfully 🚀' })
})
app.use('/api', healthRouter)
app.use('/auth', auth)

// Global Error Handler

const PORT = process.env.PORT || 5005
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT} \nplease open this link in your Browser`)
    console.log(`localhost:${PORT}`)
})

// Exporting app for testing purposes
export default app


