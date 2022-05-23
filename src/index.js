const express = require('express')

//inicializacion
const app = express();

//port
app.set('port',8081);

//creo convierte todo a json
app.use(express.json());

//Routes
app.use(require('./routes/user.routes'));

const server = app.listen(app.get('port'), function () {
    var host = server.address().address
    var port = server.address().port
    console.log("api rest http://localhost:"+port)
 }) 