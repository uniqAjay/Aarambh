const promises = new Promise(function (resolve, reject) {
    //DB calls, cruptography, network
    setTimeout(() => {
        console.log("Async task is complete")
        resolve()

    }, 1000);
})



promises.then(function () {
    console.log('promise consumed')
})


new Promise(function (resolve, reject) {

    setTimeout(() => {

        resolve('pass if it is working fine')

    }, 1000);

}).then(function (message) {

    console.log(message);

})

const promiseThree = new Promise(function (resolve, reject) {

    setTimeout(() => {

        resolve({ 'username': "Ajay", 'Email': "onlyforwebuse09@gmail.com" })

    }, 1000);



});

promiseThree.then(function (username) {

    console.log(username)
})


const promiseFour = new Promise(function (resolve, reject) {

    const receivedInfo = false

    setTimeout(() => {
        if (!receivedInfo) {
            resolve({ 'username': "Ajay", 'Email': "onlyforwebuse09@gmail.com" })
        } else {

            reject('something went wrong')
        }

    }, 1000);
})

promiseFour.then(function (username) {

    // console.log(username)
    return username;

}).then(function (username) {

    console.log(username.username)

}).catch(function (errorMessage) {

    console.log(errorMessage)

})


const promiseFive = new Promise(function (resolve, reject) {

    setTimeout(() => {

        const receivingDataFromBrain = true

        if (!receivingDataFromBrain) {
            resolve({ 'forgot?': "Her" })
        }
        else {

            reject('erasing her')
        }

    }, 1000);
})

async function workingOnPromiseFive() {



    try {
        const response = await promiseFive
        console.log(response)

    } catch (error) {

        console.log(error)
    }
}

workingOnPromiseFive()


// async function fetchkey() {

//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         // console.log(response)'
//         const data = await response.json()
//         console.log(data)

//     } catch (error) {

//         console.log(error)

//     }
// }

// fetchkey()


fetch('https://api.github.com/users/hiteshchoudhary').then(function (response) {

 return response;

}).then(function (response) {

 return response.json()


}).then(function(response){

    console.log(response)

}).catch(function () {

    console.log("crashed")

}).finally(function(){

    console.log('chill bro everything is sorted')
})