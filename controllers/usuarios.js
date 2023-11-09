const {response, request} = require('express')


// crear funciones y exportarlas

const getUsuario = (req = request, res =  response) => {

    
    res.json({
        msg: 'get API controllador'
    })
  }

const getUsuarios = (req = request, res =  response) => {
    res.json({
        msg: 'get API controllador'
    })
  }


  const postUsuario = (req = request, res =  response) => {

    const body = req.body;

    res.json({
        msg: 'post API controllador =  se posteo un usuario',
        body
    })
  }

  const putUsuario = (req = request, res =  response) => {

    const body = req.params.id

    res.json({
        msg: 'put API controllador',
        body
    })
  }

  const deleteUsuario = (req = request, res =  response) => {
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

