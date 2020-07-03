import { Request, Response } from 'express';
import evento from '../models/Evento';

class EventoController {
  async create(req: Request, res: Response) {
    const { nome, dateTime, limiteDePessoas } = req.body;
    const [, useToken] = req.headers.authorization!.split(' ');

    if (useToken === process.env.useToken) {
      try {
        const eventoCriado = await evento.create({
          nome,
          dateTime,
          limiteDePessoas,
        });

        return res.json(eventoCriado);
      } catch (err) {
        return res.status(400).json(err);
      }
    }

    return res.status(401).json({ error: 'Permissão negada.' });
  }
}

export default EventoController;
