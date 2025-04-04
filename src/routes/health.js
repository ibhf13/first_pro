import { Router } from 'express'

const healthRouter = Router()

healthRouter.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Service is up' })
})

export default healthRouter