// immediately Invoked Functions Expressions


(function chai ()
{
    console.log("DB-Connected")

})();

( (name) => 
{
    console.log("DB-Connected "+  name)

})("Ajay")