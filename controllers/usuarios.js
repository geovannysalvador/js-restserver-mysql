const { response, request } = require('express')

const Usuario = require('../models/usuario')


// crear funciones y exportarlas

const getUsuarios = async (req = request, res = response) => {

  const usuarios = await Usuario.findAll();

  res.json({
    msg: 'Esto son Todos los usuarios',
    usuarios
  })
}

const getUsuario = async (req = request, res = response) => {

  const {id} = req.params;
  const usuario = await Usuario.findByPk(id);

  if(usuario) {

    res.json(usuario)

  }else{
    res.status(404).json({
      msg: 'No exoste el usuario con el id: ' + id
    });
  }

}


const postUsuario = (req = request, res = response) => {

  const body = req.body;

  res.json({
    msg: 'post API controllador =  se posteo un usuario',
    body
  })
}

const putUsuario = (req = request, res = response) => {

  const body = req.params.id

  res.json({
    msg: 'put API controllador',
    body
  })
}

const deleteUsuario = (req = request, res = response) => {
  res.json({
    msg: 'Delete API controllador'
  })
}





module.exports = {
  getUsuario,
  getUsuarios,
  postUsuario,
  putUsuario,
  deleteUsuario,

}

