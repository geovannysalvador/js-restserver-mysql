

const { Router } = require('express');
const {  usuariosPut, usuariosPost, usuariosDelete, usuariosGet } = require('../controllers/usuarios');

const router = Router();

 router.get('/', usuariosGet);

  router.put('/', usuariosPut);

  router.post('/', usuariosPost);

  router.delete('/', usuariosDelete);


module.exports = router;