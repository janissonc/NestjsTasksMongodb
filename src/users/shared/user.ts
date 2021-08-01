import { Document } from 'mongoose';
export class User extends Document {
  nome: string;
  email: string;
  password: string;
}
