const myArr = [1,2,3,4,5, "shiwangi", true];
// its ok to have other kinds of elements
// in only javascript , arrays create shalllow copy  i.e. -> original array will be changed

myArr.unshift(0);
//adds value at the beginning of array

myArr.shift();

const newArr = myArr.join()
// converts to string (not like literally just the type)

/* Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged.
 Use when you need to extract a portion of an array without modifying it.

Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.
Use when you need to add, remove, or replace elements within an array*/

const myn2 = myArr.slice(1,3)
// myArr = [1,2,3,4,5]       myn2 = [1,2]

const myn3 = myArr.splice(1,3)
// myArr = [4 , 5]     myn3 = [1, 2, 3]


/* joining of arrays can be done via concat and...(spread)
*/
const heroes = [1,2,3,4,5]
const numbers = [0,9,8,7,6]
const yo = [...heroes, ...numbers] //spread operator for join

//console.log(yo);


const an = [1,2,3,[4,5,6],7,[8,9,[0,12,34]]]
const real = an.flat(Infinity)
//console.log(real);

console.log(Array.isArray("shiwangi")) //false
console.log(Array.from("Shiwangi"))
// output -> ['S', 'h', 'i','w', 'a', 'n','g', 'i']


console.log(Array.from({name:"shiwangi"})) // [] <-output

let s1 = 100
let s2 = 90
let s3 = 89
console.log(Array.of(s1,s2,s3)); // [100,90,89]



// node 01_basics/03_Arrays.js