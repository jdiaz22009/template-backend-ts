import mongoose,{ Schema, model } from 'mongoose';

// ? interface valid document
export interface users extends mongoose.Document{
  name: string;
  last_name: string;
}

//? Schema model
const schemaUsers = new Schema({
  name: {type:String, default: ''},
  last_name: {type:String, default: ''}
})

var userSchema =  model<users>('users',schemaUsers);

export const userShcema = userSchema