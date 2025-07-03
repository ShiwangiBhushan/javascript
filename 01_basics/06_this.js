//this keyword refers to the current context

const user = {
    username : "shiwangi",
    price : 66,

    welcome : function () {
        console.log(`good morning ${this.username}`);

    }

}
user.welcome()
//prints shiwangi 
user.username = "sma"
user.welcome()
//prints sma

/* important - console.log(this) in the node environment might reslut in 
{} empty because of the environment but in the browser
 it will give windows*/

 //this can't be used in function
 function tea () {
    let username = "me"
    console.log(this.username);
 }

 tea() // output => undefined

 //arrow function
 const addtwo = (n1,n2) => {
    return n1+n2
 }
 console.log(addtwo(3,4));
//or u cud implicit return for 1 line
const add = (n1,n2) =>(n1+n2)


//important syntax to return object u need brackets
const t = (n1) => ({username: "hey"})

// node 01_basics/06_this.js