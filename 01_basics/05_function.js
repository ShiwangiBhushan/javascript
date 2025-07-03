function addTwonumbers(number1, number2) {
    console.log(number1 + number2);
}

addTwonumbers(3,"4")
//the datatype is undefined as there is no return .

function addTwonumbers(number1, number2) {
    return number1 + number2
    }

function loginUserMessage(username) {
    return `${username} just logged in` // esc ke neeche wala button hai `
}

console.log(loginUserMessage("hero"))


// use of rest operator
function calculate (...n1) {
    return n1
}
console.log(calculate(20,30,40))
//now u can type many parameters without actually knowing before


two(7) //it will throw error 
const two = function (n){
    return n+2
}



// node 01_basics/05_function.js