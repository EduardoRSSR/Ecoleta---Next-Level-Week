
const mysql = require('mysql');

const mysql = new mysql.Database("./src/database/database.db")

module.exports = mysql; //exportando objeto db 

const con = mysql.createConnection({
    host: 'mysql669.umbler.com', // O host do banco. Ex: localhost
    user: 'eduardorodrigues', // Um usuário do banco. Ex: user 
    password: 'Dudu2020', // A senha do usuário. Ex: user123
    database: 'ecoletanlw' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});

con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})

con.end((err) => {
    if(err) {
        console.log('Erro to finish connection...', err)
        return 
    }
    console.log('The connection was finish...')
})
