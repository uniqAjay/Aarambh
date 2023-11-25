let myName = 'Ajay       '
let greetings = 'welcomeToTheRealWorld         '



const heros = {

    batMan: 'mind',
    spiderMan: 'sling',
    showHeroPower: function () {
        console.log(`Spider Man got ${spiderMan} power`)
    }

}

// console.log(heros.showHeroPower())

Object.prototype.printMe = function () {
    console.log(`Always Print Ajay`)
}

// heros.printMe()


Object.prototype.trueLenght = function () {
    console.log(this.trim().length)


}

// console.log(greetings.trueLenght())

// inheritance

let realworld = {

    struggle: true,
    goal: true
}

let willYouWinTheRace = {

    definitly: 'Yes',

    // __proto__ : realworld 



}

Object.setPrototypeOf(willYouWinTheRace, realworld)

// console.log(willYouWinTheRace.goal)
// console.log(realworld.definitly)

// "Andrew".trueLenght()