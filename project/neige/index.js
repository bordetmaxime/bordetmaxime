require('dotenv').config();

const express = require('express');
const app = express();

const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./public'));

app.use(express.urlencoded({extended:true}));


app.use(session({
    
    secret: '123456',
 
    saveUninitialized: false,

    resave: true
}));

app.use((req, res, next) => {

    if(req.session.user) {
        res.locals.user = req.session.user;
    }
    next();
});

const router = require('./app/router');
app.use(router);

app.listen(process.env.PORT);