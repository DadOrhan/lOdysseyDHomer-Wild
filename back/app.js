const express = require('express');
const app = express();
const router = express();
const mysql = require('mysql');
// const  http  =  require('http');
// const  path  =  require('path');
const  bodyParser  =  require('body-parser');
const  morgan  =  require('morgan');


const connection = require('./helpers/db.js');
const authRouter = require('./routes/auth/auth');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));

app.use('/auth', authRouter);

//j'implémentation la partie API
app.get("/", (req,res)=>{
  res.send("youhou");
})
/// dans le cas d'une route non trouvée, je retourne le code 404 'Not Found'
app.use(function(req, res, next) {
  var  err  =  new  Error('Not Found');
  err.status  =  404;
  next(err);
});

//je lance le serveur node
app.listen(5000,() => console.log('Port 5000 ok !'))

module.exports = app;