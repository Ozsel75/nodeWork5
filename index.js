const http = require("http")

const server = http.createServer((req, res)=>{

    const url = req.url

    if(url === "/"){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write("<h2>Index Sayfasina Hosgeldiniz</h2>")
    }

    else if(url === "/hakkimda"){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write("<h2>Hakkimda Sayfasina Hosgeldiniz</h2>")
    }

    else if(url === "/iletisim"){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write("<h2>Iletisim Sayfasina Hosgeldiniz</h2>")
    }

    else {
        res.writeHead(400, {"Content-Type": "text/html"})
        res.write("<h2>404 Hata Sayfa bulunamadi</h2>")
    }
})

const port = 5000;

server.listen(port, ()=>{
    console.log("Server Started")
})