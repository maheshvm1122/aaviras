import mongoose from 'mongoose';
const uri = process.env.MONGODB_URI;
export async function connectDB(){ if(!uri) return null; if(mongoose.connection.readyState === 1) return mongoose.connection; return mongoose.connect(uri); }
