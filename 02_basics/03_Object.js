
const sym = Symbol("Mykey1")


const Jusr = {

    name: "Ajay",
    "full name " : "Ajay Gavali",
    email: "ajaygavali2@gmail.com",
    number: 7743934318,
    location: "pune",
    [sym]:"Mykey1",
    isLogged: false,
    logInTime: ["Monday", "Friday"]

}


// console.log(Jusr.email)
// console.log(Jusr["full name "])
// console.log(Jusr[sym])

// console.log(typeof sym)

Jusr.email = "gavali-ajay.mahadu@allianz.com"
console.log(Jusr)
// Object.freeze(Jusr)
Jusr.isLogged = true
console.log(Jusr)

Jusr.greetings = function()
{
    console.log("My self Ajay")

}

console.log(Jusr)
console.log(Jusr.greetings())

Jusr.greetings2 = function(){

    console.log(`Hello js users this side, ${this.name}`);
}


console.log(Jusr.greetings2())