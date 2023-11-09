

const { Router } = require('express');
const {  usuariosPut, usuariosPost, usuariosDelete, usuariosGet } = require('../controllers/usuarios');

const router = Router();

  router.get('/', usuariosGet);

  router.post('/', usuariosPost);

  router.put('/:id', usuariosPut);

  router.delete('/:id', usuariosDelete);


module.exports = router;