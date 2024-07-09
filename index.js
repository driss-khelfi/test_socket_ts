//instanciation d'express
const app = require("express")();

//creation serveur 
const http = require("http").createServer(app);

//instanciation socket.io
const io = require("socket.io")(http);

//creation de la route slash
    app.get("/",(req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

//ecoute de l'évènement connexion socket.io
    io.on("connection", (socket) => {
    console.log("une connexion s'active");
   

//ecoute de la deconnexion
    socket.on("disconnect",() => {
    console.log("un utilisateur s'est déconnecté");
    });

//gestion du chat
    socket.on("chat_message",(msg)=>{
    console.log(msg);
    //relai du message vers tous les utilisateurs conencté
    io.emit("received_message", msg); 
});

});

//interrogation du serveur sur le port 3000
http.listen(3000, ()=>{
    console.log("communication avec le port 3000");
});
