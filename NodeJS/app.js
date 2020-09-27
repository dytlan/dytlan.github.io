const path          = require('path');

const express       = require('express');
const bodyParser    = require('body-parser');
// const expressHBars  = require('express-handlebars');

const app           = express();

const adminRoutes      = require('./routes/admin');
const shopRoutes       = require('./routes/shop');
const errorRoutes      = require('./routes/error');
// const basePath      = require('./helpers/basepath');

const database      = require('./helpers/database');

database.execute('SELECT * FROM products')
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });

// app.engine('handlebars',expressHBars());

app.set('view engine', 'ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(errorRoutes);

app.listen(3000);