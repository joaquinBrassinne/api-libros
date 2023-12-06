const express = require('express');
const app = express();
app.use(express.json());

//importamos el router de libros
const libroRouter = require('./routes/libros');
//Importatmos el middleWare error handler.
const errorHandler = require('./middleWares/errorHandler')

app.use('/libros', libroRouter)
app.use(errorHandler)

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor express.js funcionando en el puerto ${port}`);
})