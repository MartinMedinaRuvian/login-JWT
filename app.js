import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';

const login_rutas = require('./routers/login_rutas')
const cliente_rutas = require('./routers/cliente_rutas')
const producto_rutas = require('./routers/producto_rutas')

const app = express()

const uri = "mongodb+srv://admin:123abc@cluster0-55o46.mongodb.net/yoli?retryWrites=true&w=majority";
const options = {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true };

mongoose.connect(uri, options).then(
  () => { console.log('Conectado a DB') },
  err => { console.log(err) }
);


app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))


app.use('/', login_rutas)
app.use('/api/cliente', cliente_rutas)
app.use('/api/producto', producto_rutas)


app.set('port', process.env.PORT || 3000)
const puerto = app.get('port')

app.listen(puerto, ()=>{
    console.log('Server corriendo en el puerto '+ puerto)
})

