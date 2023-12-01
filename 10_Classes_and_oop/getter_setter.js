class realWorld{
    constructor(email, password){
        
        this._email = email
        this._password = password

        
    }
         set email(value){

        this._email = value

        }

        get email(){

            return this.email
        }

}

const printRealWorld = new realWorld('ajay@realwolrd.com','Realworld@7744')
console.log(printRealWorld.email)

