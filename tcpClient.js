const net = require("net")

const client = net.connect("3000", "localhost", () => {
  console.log("connected to sever")
  client.write("How are you ?")
})

client.on("data", data =>{
  console.log("response: " + data +  "  /from the server ")
})
