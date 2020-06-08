const express = require("express")
const server = express()

//Configurar pasta public

server.use(express.static("public"))

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
   
 // res.sendFile(__dirname + "/views/create-point.html") estava sendo utilizado antes de instalar nunjucks 
    return res.render("create-point.html") // utilizando render após instalar o nunjucks
})  

    //search-results
server.get("/search-results", (req, res) => {          
   
 // res.sendFile(__dirname + "/views/search-results.html") 
     return res.render("search-results.html")
})  
    
//ligar o servidor;

server.listen(3000);
