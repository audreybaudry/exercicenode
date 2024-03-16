const info = require('./information');
const cowsay = require("cowsay");
const information = require('./information');
console.log(cowsay.say({
    text: `I'm ${information.name} from ${information.campus} campus`,
    e: "oO",
    T: "U "
})); 
