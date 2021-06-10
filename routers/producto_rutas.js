import express from 'express'
const router = express.Router()

const control = require('../controllers/producto_control')

router.get('/', control.ver_todos);
router.post('/guardar', control.guardar);
router.get('/eliminar/:id', control.eliminar);
router.post('/editar/:id', control.editar);

module.exports = router