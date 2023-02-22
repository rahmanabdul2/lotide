const args = process.argv.slice(2);



////// without the use of built-in functions
const reverseString = function(args) {
  let reversed = "";
  for (let i = args.length - 1; i >= 0; i--) {
    reversed += args[i];
  }
  return reversed;
};







////////// Using the prototype functions

const reverseStr = function(str) {
  return str.split('').reverse().join('');
};

console.log(reverseStr());