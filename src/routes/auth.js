import { Router } from 'express'
import healthRoutes from './health.js'

const auth = Router()

auth.use("/api", healthRoutes)



export default auth

