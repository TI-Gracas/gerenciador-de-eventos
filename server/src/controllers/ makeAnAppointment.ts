import {Request,Response} from 'express';
import agendamento from '../models/Agendamento'
import { uuid } from 'uuidv4';

module.exports = {
    async create (req:Request, res:Response){

    try{
        const {name, eventId, position} = req.body;

        agendamento.create({
            id : uuid(),
            name,
            eventId,
            position
        });

    }catch(err){
        return res.status(400).json({erro: "Erro ao cadastrar sua informação"});
    }
    }
}