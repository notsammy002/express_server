const express = require("express");
const authors = require("./author_data.json");
const PORT = 3001;

//app.use(express.json());

let app = express();

app.use(express.json());

function logger(req, res,next){
    console.log(`api_requested_by: "Sammy"`);
    next()
    console.log(`api_requested_by: "Sammy"`);
}
//getting of author
app.get("/", logger, (req, resp) => {
    resp.json(authors)
});


app.get("/authors", (req, resp) => {
    let { id } = req.query;
    if (id) {
    const author = authors.filter((author) => author.id !== Number.parseInt(id));
    console.log({ author })
    resp.json(author);
    }
    else {
        resp.json({
            request_from: req.url,
            data: authors,
        });
    }

});

app.get("/authors/:id", (req, resp) => {
    const { id } = req.params;
    console.log({ id })
    const author = authors.find((author) => author.id === Number.parseInt(id));
    console.log({ author })
    resp.json(author);
});

app.post("/authors", (req, resp) => {
    console.log("POST to /author", req.body);
    authors.push(req.body);
    resp.json(req.body);
});

app.listen(PORT, () =>{
    console.log(`listen at PORT: ${PORT}`)
})

