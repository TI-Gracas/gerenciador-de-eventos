import express from 'express';
import EventoController from './controllers/EventoController';

const makeAnAppointment = require('./controllers/ makeAnAppointment');

const Evento = new EventoController();

const routes = express.Router();

routes.get('/register', makeAnAppointment.create);

routes.post('/event', Evento.create);
routes.delete('/event/:id', Evento.remove);
routes.put('/updateEvent/:id', Evento.update);

export default routes;
