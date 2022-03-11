const express = require("express");
const users = require("./users.json")
const PORT = 8000;

let app = express();

//use of middleware

app.use(express.json());

//send filename
app.get("/", (req, resp) => {
    resp.sendFile(`${__dirname}/index.html`)
});



//send json file

// app.get("/users", (req, resp)=> {
//     resp.json(users);
// });

//send the json file in fromat of object
//http://localhost:8000/users?first_name=Yancy
app.get("/users", (req, resp) => {
    let { first_name, gender } = req.query;
    if (first_name) {
        const user = users.find((user) => user.first_name === first_name);
        // console.log({user})
        resp.json(user);
    }
    else {
        resp.json({
            request_from: req.url,
            data: users,
        });
    }

});

//get data from json file using id
app.get("/users/:id", (req, resp) => {
    const { id } = req.params;
    console.log({ id })
    const user = users.find((user) => user.id === Number.parseInt(id));
    console.log({ user })
    resp.json(user);
});

//get data from json file using query parameter
app.get("/users", (req, resp) => {
    resp.json(users);
});


//post of data 
app.post("/users", (req, resp) => {
    console.log("POST to /user", req.body);
    users.push(req.body);
    resp.json(req.body);
});


app.listen(PORT, () => {
    console.log(`listen at PORT: ${PORT}`)
});