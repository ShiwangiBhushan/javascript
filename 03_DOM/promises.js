/* //Do an async task
    // DB calls, cryptography, network


const promiseOne = new Promise(function(resolve, reject) {
    setTimeout (function() {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promisetwo(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function (resolve, reject){
    setTimeout(function(){
        resolve({username: "Chinese", email: "chips@example.co"})

    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(reslove, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "shiwangi"})
        } else {
            reject('Error: Something went wrong')

        }
    }, 1000)

})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(() => console.log("done bhai done")) */


const promisefive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username:"shiwangi" , mail:"heyshiwangi"})
        }else {
            reject ('ERROR: Something went wrong')
        }
    }, 1000)
})

// lets handle it differently through async and await
async function consumePromiseFive(){
    // promise is an object so never write like this -> promise()
    /* const response = await promiseFive
    console.log(response); 
    writing try catch block instead for better code
    */
   try {
    const response = await promisefive
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}
consumePromiseFive()


//fetch here has a url of an api and we are trying to use this api

//lets do this again with then blocks



// node 03_DOM/promises.js