
function setUserName (username){
    this.username = username
    console.log('executed')
}

function userDetails(username, email, password){
    
    setUserName.call(this,username)
    this.email = email
    this.password = password

}

const newUser = new userDetails('Ajay', 'test@allianz.com', 'Andrew@7744')

console.log(newUser)