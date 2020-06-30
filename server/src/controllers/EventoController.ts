import { Request, Response } from 'express'
import evento from '../models/Evento'
import { uuid } from 'uuidv4'

class EventoController {
  async create(req: Request, res: Response) {
    const { nome, datetime, limiteDePessoas } = req.body
    
    const eventoCriado = await evento.create({
      id: uuid(),
      nome,
      datetime,
      limiteDePessoas
    })

    return res.json(eventoCriado)
  }
}

export default EventoController
