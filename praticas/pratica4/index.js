const express = require('express');

const app = express();

//middleware integrado
app.use(express.json());

//middleware de rota
app.get("/", function(req, res){
    console.log("URL=", req.url);
    console.log("Metodo=", req.method);
    console.log("Cabecalho=", req.headers);
    console.log("Parametros=", req.params);
    console.log("Corpo=", req.body);
    res.status(200).send("Ola");
})

app.post("/", function(req, res){
    res.status(201).end();})

app.put("/", function(req, res){
    res.status(200).end();
})

app.delete("/", function(req, res){
    res.status(204).end();
})

app.use(function(error, req, res, next){
    res.status(400).send("Deu ruim!");
})




app.listen(3000, function(){
    console.log("API está ON!")
})

module.exports = app;