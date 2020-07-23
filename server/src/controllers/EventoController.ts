import { Request, Response } from 'express';
import evento from '../models/Evento';

class EventoController {
  async create(req: Request, res: Response) {
    const { nome, dateTime, limiteDePessoas } = req.body;

    try {
      const eventoCriado = await evento.create({
        nome,
        dateTime,
        limiteDePessoas,
      });

      return res.status(201).json(eventoCriado);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await evento.findOneAndDelete({ where: { _id: id } });

      return res.status(200).json({ message: 'Item deletado' });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const { limiteDePessoas, dateTime } = req.body;

      const existEvento = await evento.findOne({ _id: id });

      if (!existEvento) return res.status(401).json({ error: 'O evento não existe.' });

      if (limiteDePessoas) {
        await evento.findOneAndUpdate({ _id: id }, { limiteDePessoas });
      }

      if (dateTime) {
        await evento.findOneAndUpdate({ _id: id }, { dateTime });
      }

      return res.status(200).json({ message: 'O evento foi atualizado.' });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
}

export default EventoController;
