const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req , res)=>{
    const path = req.url;

    if(path == "/about"){
        console.log("about page..!");
        res.writeHead(200, {"Content": "text/html"});
        const fileContent = fs.readFileSync("./project_frontend/about.html");
        res.write(fileContent);
        res.end();
    }

    else if(path == "/"){
        console.log("home page..!");
        res.writeHead(200, {"Content": "text/html"});
        const fileContent = fs.readFileSync("./project_frontend/index.html");
        res.write(fileContent);
        res.end();
    }

    else if (path == "/services"){
        console.log("Service page..!");
        res.writeHead(200, {"Content": "text/html"});
        const fileContent = fs.readFileSync("./project_frontend/service.html");
        res.write(fileContent);
        res.end();
    }

});
server.listen(8085);
