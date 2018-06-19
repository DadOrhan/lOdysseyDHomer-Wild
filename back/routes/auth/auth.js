const express = require('express');
const app = express();
const router = express.Router();
const mysql = require('mysql');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const connection = require('../../helpers/db.js');





app.post('/SignUp', function (req, res, next) {
    console.log('bitch plz', req.body);

    let post = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    };

    console.log('Yooooo');

    let sql = 'INSERT INTO users SET ?';
    // let sql = "INSERT INTO users (name,lastname,email,password) VALUES (?,?,?,?)", ///
    let query = connection.query(sql, post, (err, result) => {
        if (err)
                res.status(500).json({ flash:  err.message });
            else
                res.status(200).json({ flash:  "User has been signed up !" });
    });
});



module.exports = app;