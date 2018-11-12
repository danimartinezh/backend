//Manuales

//Constantes & librerias
const express = require('express')
const app = express()
const morgan = require('morgan')
const config = require('./config')
//const mysql = require('mysql')
global.connection = require('./db')

//Middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Config
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Content-Type", "application/json")
    //res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS,DELETE')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
});

//Rutas
const question_route = require('./routes/question.route')
const answer_route = require('./routes/answer.route')

app.use('/api/v1/questions', question_route)
app.use('/api/v1/answer', answer_route)

app.listen(config.site.PORT, () => {
    console.log('Servidor ON :' + config.site.PORT)
})