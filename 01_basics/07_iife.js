//immediately invoked function expressions (iife) 

(function chai() {
    console.log(`hey iife`);
})(); //this semicolon is important



//another way to write 
( (name) => {
    console.log(`hey once again ${name}`);
}) ('shiwangi');


/* how does js executes code?

1) global execution -> allocates to this
2) memory creation phase
3) execution phase



// node 01_basics/07_iife.js