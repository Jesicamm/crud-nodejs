const mysql = require('mysql');

const conexion = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'crud_nodejs_db'
});

conexion.connect((error) => {
    if (error){
        console.error('el error de conexion es: ' + error);
        return
    }
    console.log('conectado correctamente a mysql');

})

module.exports = conexion;