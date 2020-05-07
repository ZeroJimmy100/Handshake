const express = require("express");
const app = express();

const server = app.listen(8000, () =>
console.log("The server is all fired up on port 8000")
);

const io = require("socket.io")(server);

io.on("connection", socket => {
    console.log(`New User: ${socket.id} has enter/connected!`)
    console.log("The server is all fired up on port 8000")

    socket.on("user_login", userData => {
        console.log(userData)
        socket.broadcast.emit('New User', `${userData} has logged in chat`)
    })

    socket.on("event_from_client", data => {
        io.emit("send_data_to_all_other_clients", data);
        console.log("server sending", data);
    })

    socket.on("disconnect", data=>console.log(`User ${socket.id} has disconnect`, data))
});