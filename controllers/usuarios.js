const {response, request} = require('express')


// crear funciones y exportarlas
const usuariosGet = (req = request, res =  response) => {
    res.json({
        msg: 'get API controllador'
    })
  }

  const usuariosPut = (req = request, res =  response) => {
    res.json({
        msg: 'put API controllador'
    })
  }

  const usuariosPost = (req = request, res =  response) => {
    res.json({
        msg: 'post API controllador'
    })
  }

  const usuariosDelete = (req = request, res =  response) => {
    res.json({
        msg: 'Delete API controllador'
    })
  }





module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
}

