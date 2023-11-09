const express = require('express');
const cors = require('cors');
const db = require('../db/connection');



class Server{

    constructor(){
        // Para que se ejecuten antes de nada
        this.app = express();
        this.port = process.env.PORT;
        // ruta de los las peticiones
        this.usuariosPath = '/coffe/usuarios';
        // Llamar a la bd
        this.dbConnection();
        // Middlewares
        this.middlewares();
        // LLamar las rutas
        this.routes();

    }

    async dbConnection(){

        try {
            await db.authenticate();
            console.log('La BD esta en linea');
            
        } catch (error) {
            throw new Error('No se puede conectar a la BD', error)
        }
    }

    middlewares(){
        // protet con cors
        this.app.use(cors());
        // Lectura y parseo del body usando POST.Serialisar a un json 
        this.app.use(express.json());
        // directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
       this.app.use(this.usuariosPath, require('../routes/usuarios'))
          
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('se escucha en el puerto ' , this.port);
        });
    }

}

module.exports = Server;