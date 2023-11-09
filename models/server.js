const express = require('express');


class Server{

    constructor(){
        // Para que se ejecuten antes de nada
        this.app = express();
        this.port = process.env.PORT;
        // Middlewares
        this.middlewares();
        // LLamar las rutas
        this.routes();

    }

    middlewares(){
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.get('/', (req, res) => {
            res.send('Hello World')
          });
          
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('se escucha en el puerto ' , this.port);
        });
    }

}

module.exports = Server;