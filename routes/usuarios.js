

const { Router } = require('express');
const { getUsuario, getUsuarios, postUsuario, putUsuario, deleteUsuario } = require('../controllers/usuarios');

const router = Router();

  router.get('/', getUsuarios);

  router.get('/:id', getUsuario);

  router.post('/', postUsuario);

  router.put('/:id', putUsuario);

  router.delete('/:id', deleteUsuario);


module.exports = router;