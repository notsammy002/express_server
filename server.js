const http = require("http");

const server = http.createServer((res, resp) => {
    if(res.url === "/login") {
        resp.write("Welcome rudra");
    }
    else if(res.url === "/logout") {
        resp.write("Goodnight rudra");
    }
    else if(res.url === "/") {
        resp.write("Welcome");
    }
    else {
        resp.writeHead(404, {});
        resp.write(
            "Hmm...this page doesn't exist.Try searching for something else"
        );
    }

    resp.end();
})

server.listenerCount(7897, () => {
    console.log("starting server");
})


server.listen(7897, () => {
    console.log("starting server");
});