

const welcometoTheRealWolrd = {

     username : "Andrew",
     color : "what color is your buggati",

      realWorldTalks : function (){

            console.log(`${this.username} was saying ${this.color}` )
            // console.log(this)


     }

     
     

}


// welcometoTheRealWolrd.realWorldTalks()
// welcometoTheRealWolrd.username = "TopG"
// welcometoTheRealWolrd.realWorldTalks()

// console.log(this)

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

//     const chai = function () {
//     let username = "hitesh"
//     console.log(this);
// } 

// chai()

//     const chai = () => {
//     let username = "Ajay"
//     console.log(this)


// }

// chai()


// const arrow = (num1 , num2) => {
//     return num1 + num2
// }
// const arrow = (num1 , num2) =>  num1 + num2

/* const arrow = (num1 , num2) =>  (num1 + num2) */

const arrow = (num1 , num2) =>  ({username: "Ajay"})


 console.log(arrow(2,2))