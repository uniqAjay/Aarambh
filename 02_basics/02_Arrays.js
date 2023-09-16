const MarvelHeros = ["ironMan", "spiderMan", "captainAmerica"]
const DcHeros= ["BatMan", "SuperMan", "Flash" ]
// MarvelHeros.push(DcHeros)

// console.log(MarvelHeros)
// console.log(MarvelHeros[3][2])

// // const allHeros = MarvelHeros.concat(DcHeros)

// console.log(allHeros)

// const allNewHeros = [...MarvelHeros, ...DcHeros]  //this how spread operator work

// console.log(allNewHeros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

console.log(another_array.flat(Infinity))


// console.log(Array.isArray("Ajay"))
// console.log(Array.from("Ajay"))
// console.log(Array.from({"name" : "Ajay"}))


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))