var cowsay = require("cowsay");
const infos = require("./information");

console.log(cowsay.say({
    text : "I'm " + infos.name + " je viens de cet endroit : " + infos.campus,
    e : "oO",
    T : "U "
}));
