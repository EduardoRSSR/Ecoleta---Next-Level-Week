//importar a dependência do sql3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto para fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db; //exportando objeto db 

//utilizar o objeto de banco de dados para as operações

db.serialize( () =>{
/*
    //criar tabela com comandos SQL 

    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)  
*/


    //inserir dados na tabela 
/*    const query = `
        INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES(?,?,?,?,?,?,?); `
    
    const values = [
        "http://127.0.0.1:3000/Assets/icones/paperside.jpg",
        "Papersider",
        "Guilherme Gemballa, Jardim América",
        "Nº 260",
        "Santa Catarina",
        "Rio do Sul",
        ", Lâmpadas"      
    ] 

    function afterInsertData(err){
        if(err){
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData)
*/

/*
    //consultar dados da tabela
    db.all(`SELECT * FROM places`, function(err, rows){
        if(err){
            return console.log(err)
        }
        console.log('Aqui estão seus registros')
        console.log(rows)
    })
*/

    //deletar um dado da tabela
/*
    db.run(`DELETE FROM places WHERE ID = ?`,[13], function(err){
        if(err){
            return console.log(err)
        }
        console.log("Regristro deletado com sucesso")
    })
*/
}) 