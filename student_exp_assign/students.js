const express = require("express");
const users = require("./users.json");
const PORT = 3002;

//app.use(express.json());

let app = express();

//use of middleware
app.use(express.json());



//printing welcome
app.get("/", (req, resp) => {
    resp.send("Welcome to Home page")
});

//getting of user
app.get("/users", (req, resp) => {
    resp.json(users)
});

//post of data 
app.post("/users", (req, resp) => {
    console.log("POST to /user", req.body);
    users.push(req.body);
    resp.json(req.body);
});

//delete the item
app.get("/users/:id", (req, resp) => {
    const { id } = req.params;
    console.log({ id })
    const user = users.filter((user) => user.id !== Number.parseInt(id));
    console.log({ user })
    resp.json(user);
});


app.listen(PORT, () =>{
    console.log(`listen at PORT: ${PORT}`)
})

