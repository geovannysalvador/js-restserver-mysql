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

  const { id } = req.params;
  const usuario = await Usuario.findByPk(id);

  if (usuario) {

    res.json(usuario)

  } else {
    res.status(404).json({
      msg: 'No exoste el usuario con el id: ' + id
    });
  }

}


const postUsuario = async (req = request, res = response) => {

  const { body } = req;

  try {

    const existeEmail = await Usuario.findOne({
      where: {
        correo: body.correo
      }
    });

    if (existeEmail) {
      return res.status(400).json({
        msg: 'Ya existe el correo: ' + body.correo
      });
    }

    const usuario = new Usuario(body);
    await usuario.save();

    res.json(usuario);

  } catch (error) {
    res.status(500).json({
      msg: 'No se logro almacenar en la BD'
    })
  }

}

const putUsuario = async (req = request, res = response) => {

  const { id } = req.params
  const { body } = req

  try {

    const usuario = await Usuario.findByPk(id)

    if (!usuario) {
      return res.status(404).json({
        msg: 'No existe el usuario con el id: ' + id
      });
    }

    await usuario.update(body);

    res.json(usuario);

  } catch (error) {
    res.status(500).json({
      msg: 'No se logro almacenar en la BD'
    })
  }

}

const deleteUsuario = async (req = request, res = response) => {

  const { id } = req.params;

  const usuario = await Usuario.findByPk(id)

  if (!usuario) {
    return res.status(404).json({
      msg: 'No existe el usuario con el id: ' + id
    });
  }

  // Eliminarlo permanentemente de la bd
  // await usuario.destroy();

  // Cambiarle el estado a cero como en la BD se indico
  await usuario.update({ estado: false });

  res.json(usuario)


}





module.exports = {
  getUsuario,
  getUsuarios,
  postUsuario,
  putUsuario,
  deleteUsuario,

}

