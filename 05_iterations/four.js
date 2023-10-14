
// for in

const myObject = {
    js: "javascript",
    cpp:"C++",
    rb:"Ruby",
    swift:"Swift by Apple"

}

for (const key in myObject) {
    //  console.log(`${key} shortcut is for ${myObject[key]}`)   
    }


    // let Programming = ["js","cpp","c#","Py"]

    // // for (const value in myArray) {
    // //     console.log(key)
            
    //     }


let map = new Map()

map.set('IN', "India")
map.set('US', "United State")
map.set('UK', "United Kingdom")
map.set('NPL', "Nepal")

for (const key in map) {
    
    console.log(key)
}
