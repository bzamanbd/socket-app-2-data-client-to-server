const express = require('express')
const app = express()
const http = require('http') 
const httpServer = http.createServer(app)
const { Server } = require('socket.io') 
const io = new Server(httpServer)
const PORT = 4000 
httpServer.listen(PORT, () => { 
    console.log(`server is running on http://localhost:${PORT}`)
}) 

io.on('connect', (socket) => { 
    console.log(`Connected, socket id is: ${socket.id}`);
    socket.on('message', (name) => { 
        console.log(name);
    })
})

app.get('/', (req, res) => { 
    res.sendFile(__dirname+"/index.html")
})