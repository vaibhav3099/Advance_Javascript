
// https://www.tutorialsteacher.com/javascript/new-keyword-in-javascript

// The new keyword ignores return statement that returns primitive value.
function MyFunc() {
    this.x = 100;
    
    return 200;
}

var obj = new MyFunc();
console.log('obj: ', obj);
console.log(obj.x); // 100

/*

Here's what happens behind the scenes when the new keyword is used:

-> A new object is created: The new keyword initiates the creation of a new JavaScript object. I

-> A prototype is linked: The newly created object gets linked to the prototype 
  property of the constructor function.This means that it has access to properties
  and methods defined on the constructor's prototype.

-> The constructor is called: The constructor function is called with the specified 
arguments and this is bound to the newly created object. If no explicit return 
value is specified from the constructor. JavaScript assumes this, the newly 
created object, to be intended return value

-> The new object is returned: After the constructor function has been called, 
   if it doesn't return a non-primitive value (object, array, function, etc.), 
   the newly created object is returned.

*/