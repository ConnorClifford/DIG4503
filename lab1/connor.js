const Person = require("./person.js");

class Connor extends Person{
    constructor(name, favoriteColor, shirt){
        super(name, favoriteColor);
        this.shirt = shirt;  
    }
}
let connor = new Connor("Connor", "Blue", "Blazer");
connor.speak();

module.exports = Connor;