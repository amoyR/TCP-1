const net = require("net")
const server = net.createServer(socket => {
  socket.on("data", data => {
    console.log("data: " + data + "  /from" + socket.remoteAddress + ":" +  socket.remotePort)
    socket.write("I'm good")
  })
}).listen(3000)
