const mynums = [1,2,3]

// const myTotal = mynums.reduce(function (acc, curval){
//     console.log(`acc: ${acc} curval : ${curval}`)
//     return acc + curval;
// },0)

const myTotal = mynums.reduce((acc, curval) => acc + curval ,0)

// console.log(myTotal)

const myShopping = [
    {
        book : "js",
        price : 2000
    },

    {
        book : "py",
        price : 4000
    },

    {
        book : "c++",
        price : 6000
    }
]

const myShoppingCardValue = myShopping.reduce((accumulator, itme) =>  accumulator + itme.price ,0 )

console.log(myShoppingCardValue)


