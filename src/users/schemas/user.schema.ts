import * as mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema({
  nome: String,
  email: String,
  password: String,
});
