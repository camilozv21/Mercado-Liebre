const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Servidor levantado en el puerto '  ${PORT}🚀`)); //Windows punto 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
});

app.get('/productos/:idProducto', (req, res) => {
    res.send(`Bienvenidos al detalle del producto ${req.params.idProducto}`)
});

app.get('/productos/:idProducto/comentarios/:idComentario?', (req, res) => {
    if (req.params.idComentario == undefined) {
        res.send(`Bienvenidos a los comentarios del producto ${req.params.idProducto}`)
    } else {
        res.send(`Bienvenidos a los comentarios del producto ${req.params.idProducto} y estas enfocado en el comentario ${req.params.idComentario}`)
    }
});

// `` altgr + }
