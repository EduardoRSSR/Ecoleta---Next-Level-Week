const express = require("express")
const server = express()

const sequelize = require("sequelize")

const connection = new sequelize('ecoletanlw', 'eduardorodrigues', 'Dudu2020',{
    host: 'mysql669.umbler.com',
    dialect: 'mysql',
    timezone:"-03:00"
});
module.exports=connection;

//importando banco de dados
const db = require("./database/db")

//Configurar pasta public
server.use(express.static("public"))

//habilitar o uso do req.body na aplicação
server.use(express.urlencoded({extended: true}))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express: server,
    noCache: true
})

//Configurando caminhos da minha aplicação
    
    //Página inicial

server.get("/", (req, res) => {          // req->requisição / res->resposta
   
 // res.sendFile(__dirname + "/views/index.html") estava sendo utilizado antes de instalar nunjucks 
    return res.render("index.html")  // utilizando render após instalar o nunjucks
})
    //create-point
server.get("/create-point", (req, res) => {          
 
 //req.query -> query strings da url 

 // res.sendFile(__dirname + "/views/create-point.html") estava sendo utilizado antes de instalar nunjucks 
    return res.render("create-point.html") // utilizando render após instalar o nunjucks
})  

server.post("/save-point", (req, res) =>{
    console.log(req.body)

  //inserir dados na tabela 
    const query = `
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
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items,
    ] 

    function afterInsertData(err){
        if(err){
            console.log(err)
            return res.send("Erro no cadastro!")
        }

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", {saved: true})

    }

    db.run(query, values, afterInsertData)

})

    //search-results
server.get("/search-results", (req, res) => {          
   
   const search = req.query.search

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
        if(err){
            return console.log(err)
        } 
        const total = rows.length

        return res.render("search-results.html", {places: rows, total})
    })
})   
    
//ligar o servidor;

server.listen(3000);
