import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const esquema = new Schema({
    email:{type:String, required:true},
    password:{type:String, required:true},
    nombre:{type:String, required:true}
})

module.exports = mongoose.model('Usuario', esquema);