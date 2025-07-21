const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task
    // DB calls, cryptography, network
    setTimeout (function() {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
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

// node 03_DOM/promises.js