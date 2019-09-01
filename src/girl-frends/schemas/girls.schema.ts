import * as mongoose from 'mongoose';

export const GirlSchema = new mongoose.Schema({
  name: {type: String, required: true},
  image: {type: String, required: false},
  age: {type: Number, required: true},
  contactNo: {type: String, required: true},
  whatsApp: {type: String, required: false},
  instagram: {type: String, required: false},
  facebook: {type: String, required: false},
});