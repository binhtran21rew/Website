const express = require('express');
const path = require   ('path');
const app = express();
const morgan = require('morgan');
const {engine  } = require('express-handlebars');
const port = 3000;


const route = require('./routes');
route(app);


// app.get('/', (req, res) => {
//     res.render('home')
// })

// app use 
app.use(morgan('combined'));
app.engine('hbs', engine({extname: '.hbs'}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'))
app.use(express.static(path.join(__dirname, 'public')))


app.listen(port , () => console.log(`app listening http://localhost:${port}`))