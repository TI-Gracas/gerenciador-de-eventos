import mongoose from '../database/index';

const EventoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    default: Date.now, // tirar depois dos testes
    required: true,
  },
  limiteDePessoas: {
    type: Number,
  },
  agendamento: {
    type: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});

const Evento = mongoose.model('Evento', EventoSchema);

export default Evento;
