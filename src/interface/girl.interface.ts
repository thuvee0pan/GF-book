import { Document } from 'mongoose';

export interface Girl  extends Document{
  readonly name: string;
  readonly image: string;
  readonly age: number;
  readonly contactNo: string;
  readonly whatsApp: string;
  readonly instagram: string;
  readonly facebook: string;
}