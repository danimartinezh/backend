//Constantes & librerias
const config = require('./config')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    port: config.db.port,
    insecureAuth: true
})

connection.connect((err)=>{
    if(err) throw err
    console.log("Conexion a la BD")
})

module.exports = connection;