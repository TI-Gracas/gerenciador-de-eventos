import mongoose from 'mongoose';

mongoose.connect(`${process.env.DB_URL}`, { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.Promise = global.Promise;

export default mongoose;
