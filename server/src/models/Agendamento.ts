import mongoose from 'mongoose'

const AgendamentoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  
  evento: {
    type: String,
    required: true,
  },

  data: {
    type: Date,
    required: true
  },

  horario: {
    type: String,
    required: true
  }
})

const Agendamento = mongoose.model('Agendamento', AgendamentoSchema)

export default Agendamento
