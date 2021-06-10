import express from 'express'
const router = express.Router()

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const Usuario = require('../models/Usuario')

router.get('/', (req, res)=>{
    res.render('index')
})

router.post('/registro', async (req, res)=>{
    const {email, password, nombre} = req.body

    if(email && password && nombre){

try {
    
    await Usuario.findOne({email})
        .then(dato =>{
            if(dato){
                res.send('El email ya esta registrado');
            }else{

        
                bcrypt.hash(password, 10, function(err, hash) {
                    const dato_guardar = new Usuario({
                        email,
                        password:hash,
                        nombre
                    })
    
                  dato_guardar.save();
    
                    res.send('Guardado correctamente')
    
                });

               
            }
        })

        .catch(err=>console.log(err))

  
} catch (error) {
res.status(400).send(error)
}

}else{
    res.send('Ingrese todos los datos')
}

})


router.post('/ingreso', (req, res)=>{
    const {email, password} = req.body;
    if(email && password){

try {

    Usuario.findOne({email})
    .then(dato=>{
        if(!dato){
          res.status(400).send('el email no existe');
        }else{

            bcrypt.compare(password, dato.password, function(err, result) {
               
              if(!result){
                res.status(400).send('contraseña incorrecta');
              }else{

                // Generar Token
let token = jwt.sign({
    data: dato.email,
    nombre: dato.nombre
  }, 'secret', { expiresIn: 60 * 60 * 24 * 30}) // Expira en 30 días
  
  // Pasó las validaciones
  return res.json({
    data: dato.nombre,
    token: token
  })

              }

            });

        }
    })
    
} catch (error) {
    res.status(400).send(error)
}

    }else{
        res.status(400).send('Ingrese datos')
    }
})



module.exports = router