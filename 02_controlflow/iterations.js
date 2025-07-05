const greetings = "hello world"

for(greet of greetings) {
    //console.log(`value of ${greet}`);
}

//MAP stores only unique values like hashset in java
const map = new Map()
map.set ('IN' , "INDIA")
map.set ('I' , "IND")
map.set ('N' , "INA")
//console.log(map);

//other way to write

for(const [key,value] of map) {
    //console.log(key, ':-', value);
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'NS',
    'game3' : 'S',
    'game4' : 'N',

}
// in loops are versatile but for objects only in will work
for(const key in myObj) {
    //console.log(myObj[key]);
}

//forEach loop
const coding = ["js", "ruby", "java","python", "cpp"]

coding .forEach (function (val) {
    console.log(val);
} )
//another way to write it
coding.forEach ((item) => {
    console.log(item);
})
//another
function print(item){
    console.log(item);
}
coding.forEach(print)

// node 02_controlflow/iterations.js
