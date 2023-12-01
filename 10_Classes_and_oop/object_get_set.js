
const get_set = {

        _email : 'realworld@mail.com',
        _password : 'realWorld@7744',

       get email(){

        return this._email
       },

       set email(email){

        return this._email = email
       }
}


const newWorld = Object.create(get_set)
newWorld.email = 'realworld@andrewt.com'
console.log(newWorld.email)