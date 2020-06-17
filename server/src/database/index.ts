import mongoose from 'mongoose'

mongoose.connect(`${process.env.DB_URL}`, {useMongoClient: true})

mongoose.Promise = global.Promise

export default mongoose

