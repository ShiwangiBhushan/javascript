const myArr = [1,2,3,4,5, "shiwangi", true];
// its ok to have other kinds of elements
// in only javascript , arrays create shalllow copy  i.e. -> original array will be changed

myArr.unshift(0);
//adds value at the beginning of array

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

myArr.shift();
console.log(myArr);

// node 01_basics/03_Arrays.js