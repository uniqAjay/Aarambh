// const userEmail = []

// if(userEmail)
// {
//     console.log("user have got email")
// } else{
//     console.log("user dont have email")
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length == 0)
// {
//     console.log("Array is empty")

// }

const obj1 = {}

if(Object.keys(obj1).length == 0){
    console.log("No key found 😒")
}

// Nullish Coalescing Operator (??): null undefined
// Nullish Coalescing Operator (??): null undefined

let val1 = 5 ?? 10
val1 = null ?? 20
val1 = null ?? undefined ?? 21


// console.log(val1)

// terniary operator 

// condition ? true : false

const iceTea = 100;

iceTea <= 80 ? console.log("prise is less than 80") : console.log("price greater than 80")

