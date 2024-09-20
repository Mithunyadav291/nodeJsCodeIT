
// const convertCtF = require("./utils");  //commonjs

import convertCtF from './utils.js' // module

const celcius = 37
const fahrenheit = convertCtF(celcius);

console.log(fahrenheit);