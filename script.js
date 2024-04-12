// Instalamos express, handlebars y disponibilizamos el puerto 3000
const express = require('express');
const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});
