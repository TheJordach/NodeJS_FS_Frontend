const http = require("http")
require("dotenv").config()
const app = require("./app/app")
const serverPort = process.env.SERVER_PORT


exports.server = http.createServer(app).listen(serverPort, ()=>{
    console.log(`server is up and running at port:${serverPort}`)
})