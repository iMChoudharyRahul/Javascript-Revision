/**
 * Falsy values: false, 0 (and -0), "" (empty string), null, undefined, NaN
 * Everything else (including non-zero numbers, non-empty strings, objects, and arrays) is truthy.
 * In JavaScript, any non-zero number (positive or negative) is truthy.
 * 
 */

if( -1 ) {
    console.log("true")
}
else {
    console.log("false")
} 

if( "" ) {
    console.log("true")
}
else {
    console.log("false")
} 

