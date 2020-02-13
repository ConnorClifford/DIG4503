const Express = require("express");
const App = Express();
const port = 80;

let database = [
    {
        "name" : "Birds of Prey",
        "score": 79
    },
    {
        "name": "Cats",
        "score": 20
    },
    {
        "name": "Interstellar",
        "score": 72
    },
    {
        "name": "Parasite",
        "score": 99
    }
    
];

App.use(Express.json());
App.use("/", Express.static("public"));

App.get("/api/movies/name/:name", (req, res) =>{
    let result = {"error": "Error Message!"};

    database.forEach((value) => {
      if(req.params.name == value.name){
            result = value;
        }
    });

    res.json(result);
});

App.get("/api/movies/score/:score", (req, res) =>{
    let result = {"error": "Error Message!"};

    database.forEach((value) => {
      if(req.params.score == value.score){
            result = value;
        }
    });

    res.json(result);
});

App.listen(port, () =>{
    console.log("server running!");
}) 