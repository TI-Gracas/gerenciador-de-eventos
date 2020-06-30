import mongoose from 'mongoose'

const AgendamentoSchema = new mongoose.Schema({

  id: {
    type:String,
    required: true,
    unique: true,
    
  },
  name: {
    type: String,
    required: true
  },
  
  eventId: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
},

  updateAt:{
    type:Date,
    default: Date.now,
  },
})

const Agendamento = mongoose.model('Agendamento', AgendamentoSchema)

export default Agendamento
