

const { Router } = require('express');
const { getUsuario, getUsuarios, postUsuario, putUsuario, deleteUsuario } = require('../controllers/usuarios');

const router = Router();

  router.get('/', getUsuario);

  router.get('/:id', getUsuarios);

  router.post('/', postUsuario);

  router.put('/:id', putUsuario);

  router.delete('/:id', deleteUsuario);


module.exports = router;