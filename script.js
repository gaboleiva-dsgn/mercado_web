// Importando librerías
const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const app = express()
const PORT = process.envPORT || 3000

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto: ${PORT}`))

// Se establece que el motro de plantillas sera handlebars
app.set('view engine', '.handlebars')

app.engine('handlebars', exphbs.engine({
    extname: '.handlebars', // Extensiones de los archivos de plantillas
    defaultLayout: 'inicio', // Plantilla principal
    layoutsDir: __dirname + '/views', // Directorio de las plantillas principales
    partialsDir: __dirname + '/views/componentes' // Directorio de los partials
}));

//Defino la carpeta publica
app.use(express.static(__dirname + '/public'))
//se importan los códigos fuente de nuestras dependencias desde la carpeta node_modules
app.use('/bootstrapCss', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/bootstrapJs', express.static(__dirname + '/node_modules/bootstrap/dist/js/bootstrap.js'))
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'))

// Ruta raíz que devuelve el array con los productos
app.get('/', (req, res) => {
    res.render('Dashboard', {
      productos: ['Banana', 'Cebollas', 'Lechuga', 'Papas', 'Pimenton', 'Tomate']
    });
  });
