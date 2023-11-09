const {response, request} = require('express')


// crear funciones y exportarlas
const usuariosGet = (req = request, res =  response) => {
    res.json({
        msg: 'get API controllador'
    })
  }


  const usuariosPost = (req = request, res =  response) => {

    const body = req.body;

    res.json({
        msg: 'post API controllador =  se posteo un usuario',
        body
    })
  }

  const usuariosPut = (req = request, res =  response) => {

    const body = req.params.id

    res.json({
        msg: 'put API controllador',
        body
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

