const InstaUser = {}
InstaUser.id = "123abc"
InstaUser.name = "shiwangi"
InstaUser.islogged = false
console.log(InstaUser);

/*joining of two objects
const obj1 = {1: "a" , 2: "b"}
const obj3 = Object.assign({}, InstaUser,obj1)
console.log(obj3);
// better to use spread operator


// objects inside an array
const users = [
    {
        id : 1 , email : "hey@gmail.com"
    },

    {
        id : 2 , email : "ey@gmail.com"
    }
]

// for access of the 1st object
users[1].email

//to print just the keys or values => gives an array of the values
console.log(Object.keys(InstaUser));

//for the boolean answer of property/key existence
console.log(InstaUser.hasOwnProperty('email'));*/

//access elements in new way
// 1st method -> InstaUser.id
const {id: identity} = InstaUser
console.log(identity);

// node 01_basics/04_Objects.js