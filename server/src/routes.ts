import express from 'express'
const makeAnAppointment = require('./controllers/ makeAnAppointment')

const routes = express.Router()

routes.get('/register', makeAnAppointment.create)

export default routes
