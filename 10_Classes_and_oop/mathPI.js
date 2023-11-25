
// console.log(Math.PI)
// console.log(Object.getOwnPropertyDescriptor(Math,"PI"))

const realChai = {

    name: 'Masala Tea',
    price: '20',
    availible: true,

    favourite: function () {
        console.log(`my favourige tea is ${this.name}`)
    }



}

// console.log(Object.getOwnPropertyDescriptor(realChai, 'name'))

// Object.defineProperty(realChai,'name',{
//     writable : false,
//     enumerable : false


// })
console.log(Object.getOwnPropertyDescriptor(realChai, 'name'))


for (const [key, value] of Object.entries(realChai)) {

    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`)
    }


}