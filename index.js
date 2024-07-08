//instanciation d'express
const app = require("express")();

//creation serveur 
const http = require("http").createServer(app);

//creation de la route slash
app.get("/",(req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

//interrogation du serveur sur le port 3000
http.listen(3000, ()=>{
    console.log("communication avec le port 3000");
});
