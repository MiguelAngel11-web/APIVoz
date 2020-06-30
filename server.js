const express = require('express');//Importar libreria
const bodyParse= require('body-parser');
const rutes = require('./rutas/routes');

const cors = require('cors');
const { use } = require('./routes/rutas');
const app = express();//crea el servidor

const port = process.env.PORT || 3000;

app.use( cors() );
app.use(bodyParse.urlencoded({extend:false}));
app.use(bodyParse.json());

app.use('/',rutes);

app.listen(port,()=>{
    console.log(`Servidor en ejecución http://localhost:${port}`);
});