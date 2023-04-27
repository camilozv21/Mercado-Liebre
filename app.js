const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.listen(3000, () => console.log('Servidor levantado en el puerto 3000 🚀')); //Windows punto 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
});

