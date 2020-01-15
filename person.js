const Chalk = require("chalk");

class Person{
    constructor(name, favoriteColor){
        this.name = name;
        this.favoriteColor = favoriteColor;
    }
    speak(){
        console.log("Konnichiwa!");
        console.log(this.name + "'s favorite color is " + Chalk.keyword(this.favoriteColor.toLowerCase())(this.favoriteColor));
        console.log(this.name + " is wearing a " + this.shirt);
    }
}

module.exports = Person;