
function user (email,password){

    this._email = email
    this._password = password


      Object.defineProperty(this,'email',{

        get: function(){

            return this._email.toUpperCase()
        },

       set: function(value){

        this._email = value

       }

      })


      Object.defineProperty(this,'password',{

        get: function(){

            return `${this._password}ABC`

        },

        set: function(value){

            this._password = value
        }
      })
}

const realWorld = new user('realWorld@unix.com','realWorld@7744')

console.log(realWorld.email)
console.log(realWorld.password)

