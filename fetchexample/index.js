const Express = require("express");
const App = Express();
const port = 80;

App.use(Express.json());
App.use("/", Express.static("public"));

App.get("/api/:value", (req, res) =>{
    let result = {"error": "Error Message!"};

    if(req.params.value == 5){
        result = {"secret": "ur pretty smrt!"};
    }

    res.json(result);
});

App.listen(port, () =>{
    console.log("server running!");
})