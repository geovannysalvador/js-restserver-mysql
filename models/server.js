const express = require('express');
const cors = require('cors');



class Server{

    constructor(){
        // Para que se ejecuten antes de nada
        this.app = express();
        this.port = process.env.PORT;
        // ruta de los las peticiones
        this.usuariosPath = '/coffe/usuarios';
        // Middlewares
        this.middlewares();
        // LLamar las rutas
        this.routes();

    }

    middlewares(){
        // protet con cors
        this.app.use(cors());
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