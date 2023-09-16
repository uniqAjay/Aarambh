
const Arrays1 = [1, 2 , 5, 6, 5, 3, 4, 8]

console.log(Arrays1.length)

const myarr = new Array(1, 4, 5, 7, 8);

// console.log(myarr)

Arrays1.push(9)
console.log(Arrays1.length)

Arrays1.pop()

Arrays1.shift()
Arrays1.unshift(10)

// console.log(Arrays1.includes(10))
// console.log(Arrays1.indexOf(4))


//  console.log(Arrays1.join())

// console.log(Arrays1)

console.log("A", Arrays1)


const sliced = Arrays1.slice(3, 5)
console.log(sliced)

console.log("B", Arrays1)

const spliced = Arrays1.splice(3, 3)
console.log("c", Arrays1)
console.log(spliced)








