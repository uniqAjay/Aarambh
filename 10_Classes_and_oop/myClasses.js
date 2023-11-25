

// class welcomeToTherRealWorld {
//     constructor(realName, Email, password) {

//         this.realName = realName
//         this.Email = Email
//         this.password = password

//     }

//     ifOutOfMatrix() {
//         return `${this.realName} what color is your bugatti`
//     }

//     howToJoinRealWorld() {

//         return `${this.username} please listen to the Andrew & Cristian Tate`
//     }
// }

// const unique = new welcomeToTherRealWorld('Unique', 'unique@realworld.com', 'Andrew@2382');

// // unique.ifOutOfMatrix()

// class myFriend extends welcomeToTherRealWorld {

//     constructor(username) {
//         super(username)
//         this.username = username
//     }

// }

// const heWantsToJoinRealWorld = new myFriend('Ajay')

// console.log(heWantsToJoinRealWorld.howToJoinRealWorld())


// behind the scene 

function welcomeToTherRealWorld(username,Email,password){
    this.username = username
    this.Email = Email
    this.password =  password

}

welcomeToTherRealWorld.prototype.ifOutOfMatrix = function(){
    return `${this.username} what color is your bugatti`

}

welcomeToTherRealWorld.prototype.howToJoinRealWorld = function() {

    return `${this.username} please listen to the Andrew & Cristian Tate`
}


const reboot = new welcomeToTherRealWorld('Captian',"america@realworld.com",'us@7744')

console.log(reboot.ifOutOfMatrix())