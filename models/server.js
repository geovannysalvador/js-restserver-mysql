const express = require('express');
const cors = require('cors');



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
        // protet con cors
        this.app.use(cors());
        // directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.get('/api', (req, res) => {
            res.json({
                msg: 'get API'
            })
          });

          this.app.put('/api', (req, res) => {
            res.json({
                msg: 'put API'
            })
          });

          this.app.post('/api', (req, res) => {
            res.json({
                msg: 'post API'
            })
          });

          this.app.delete('/api', (req, res) => {
            res.json({
                msg: 'delete API'
            })
          });
          
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('se escucha en el puerto ' , this.port);
        });
    }

}

module.exports = Server;