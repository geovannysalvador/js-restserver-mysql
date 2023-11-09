
const { DataTypes } = require("sequelize");

const db = require('../db/connection');

// import db from "../db/connection";

// Referencia a la base de datos para definir el modelo 

const Usuario = db.define('Usuario', {
    nombre: {
        type: DataTypes.STRING
    },

    correo: {
        type: DataTypes.STRING
    },

    estado: {
        type: DataTypes.TINYINT
    },
});

module.exports = Usuario;


