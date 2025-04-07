import { Router } from 'express'
import healthRoutes from './health.js'
import registerRoute from './registration.js'


const auth = Router()

auth.use('/api', healthRoutes)
auth.use('/register', registerRoute)


export default auth
