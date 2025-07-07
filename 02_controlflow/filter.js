const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num) => {
    return num > 4
} )


const newNums1 = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums1.push(num)
    }
} )

console.log(newNums1);


// node 02_controlflow/filter.js