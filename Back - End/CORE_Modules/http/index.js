const http = require("http")

const port = 3000

const server = http.createServer((req, res) =>{
    res.write('Oi HTTP')
    res.end()

})

server.listenerCount(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})