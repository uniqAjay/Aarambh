// for each 

const Programming = ["js", "py","c++","swift"]

// Programming.forEach(function(programingL){
//     console.log("most demanded programing language in top MNC is " + programingL)
// });

// Programming.forEach((programingL) => {
//     console.log("most demanded programing language in top MNC is " + programingL)
// });

function printL(item){
    console.log(item)
}

// Programming.forEach(printL)


Programming.forEach((programingL, index, arr) => {
    // console.log(programingL,index,arr)
});


const howToGetOutOfMatrix = [
  
    {   listen : "Andrew Tate",
        What : "his Plan",
        Happen: "will help you to get you out of Matrix"
    }


]

howToGetOutOfMatrix.forEach((Realword) => {
    console.log(Realword.listen + " and " + Realword.What, Realword.Happen )
});


let myCoding = [
{
    language : "java",
    fileExtention : "java"

}
,
{
    language : "Python",
    fileExtention : "py"
    
}
,
{
    language : "javascript",
    fileExtention : "js"
    
}
]

myCoding.forEach((item) => {

    console.log(item.fileExtention)
    
});