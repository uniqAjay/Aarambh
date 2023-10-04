
const pubg = {}


pubg.id = 439343
pubg.level = "Advance"
pubg.clan = "Rushers"

// console.log(pubg)

const twitteruser = {

    email : "onlyforwebuser09@gmail.com",
    "full_name":  {
        "first_name" : "Ajay",
        "last_name"  : "Gavali",
        userId:{
            Id : "UniqBoy09"

        }
    }

}

// console.log(twitteruser.full_name.userId.Id)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// // const obj4 = {obj1, obj2, obj3}
// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = { ...obj1, ...obj2, ...obj3}

// console.log(obj4)

const user = [

    {
        id : 1
    },

    {
        id: 2
    },

    {
        id: 3
    }

]

// console.log(user[2].id)
console.log(pubg)

console.log(Object.keys(pubg))
console.log(Object.values(pubg))
console.log(Object.entries(pubg))

console.log(pubg.hasOwnProperty("id"))


//object de-structure

const favSong = {

    ignite : "Alan Walker",
    bad_Reputation: "Avici",
    i_want_Something_just_like_This: "Chainsmokers"

    
}

const { i_want_Something_just_like_This: justLikeThis} = favSong

// console.log(justLikeThis)



