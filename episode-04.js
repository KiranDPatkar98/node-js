// Modules
// Modules protect their functions and varaibles from  leaking

// const obj=require('./sum.js')


// const res=obj.calculateSum(5,10)
// console.log(res)

// -----------------------------------------------------------------------------------------------------------------

// Common JS module Vs ES module

// Common JS module

// For exporting we write module.exports= a or module.exports={a,b,c}
// For importing we write const a=require('path')
// by default used in Node.js
// Synchronous
// Loaded on runtime
// older  way
// code runs in non strict mode



// ES module (ES6 module)
// For exporting we write export default a or export {a,b,c}
// For importing we write import a from 'path'
// Supported in both Node.js and browsers
// Asynchronous
// Loaded on compile time
// Newer way
// package.json file should have "type":"module" to use ES module in Node.js
// for expamle in react we use ES module
// code runs in strict mode



const {calculateMultiply, calculateSubtraction}=require('./calculate')

const multiply=calculateMultiply(5,10)
const sub=calculateSubtraction(5,10)
console.log(multiply)
console.log(sub)

// ------------------------------------------------------------------------------------------------------------

// Making a Folder a Module in Node.js

// A folder can act as a module if it contains an entry file (usually index.js)
// Group related files together
// Make importing simpler (import './folder' instead of multiple files)
// Maintain clean, modular code organization