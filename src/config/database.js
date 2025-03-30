import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const connectToDatabase = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI)

    console.log(`✅ Successfully connected to MongoDB: ${connectionInstance.connection.host}`)
  } catch (error) {
    console.error(`❌ Database connection error: ${error.message}`)
    process.exit(1)
  }
}

export default connectToDatabase