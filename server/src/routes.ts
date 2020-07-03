import express from 'express';
import EventoController from './controllers/EventoController';

const makeAnAppointment = require('./controllers/ makeAnAppointment');

const Evento = new EventoController();

const routes = express.Router();

routes.get('/register', makeAnAppointment.create);

routes.post('/event', Evento.create);

export default routes;
