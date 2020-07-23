import mongoose from 'mongoose';

require('dotenv').config();

mongoose.connect(`${process.env.DB_URL}`, { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.Promise = global.Promise;

export default mongoose;
