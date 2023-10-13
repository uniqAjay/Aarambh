//for 

// for (let index = 1; index <= 10; index++) {
//      const element = index;
    
//      if(element == 5)
//     {
//         console.log("five is best no")
//     } else
//     {
//         console.log( `value of index is ${index}`)
//     }

// } 

//inner loop

    for (let i = 1; i <=10 ; i++) {

        for (let j = 1; j <=10; j++) {

        // console.log(`outer loop value is ${i}, inner loop value is ${j}`)
        // console.log(`${i} * ${j} ${i*j}`)
    }

}

let Array = ["Batman", "Flash", "iron man"]

for (let index = 0; index <= Array.length - 1; index++) {
    // const element = Array[index];
    // console.log(element)
}


//break and continue 

for(let i = 0; i <= 10; i++){
    if(i==5)
    {
        console.log("Detected 5")
        break
    }
    console.log(`value of i is ${i}`)
}

console.log("%%%%%%%%%%%%%%%%%%%%%%")

for(let i = 0; i <= 5; i++){
    if(i==5)
    {
        console.log("Detected 5")
        continue 
    }
    console.log(`value of i is ${i}`)
}