/*
  Write a function that gets any object
  and returns the sum of the lenghts of
  all the strings inside the object


  Considerations: Values can be nested and datypes Number, String or Object.
*/

function deepStringSum(obj) {
  let counter = 0;
  for (var i in obj) {
    if (typeof obj[i] == 'object') counter += deepStringSum(obj[i]);
    if (typeof obj[i] == 'string') counter += obj[i].length
  }
  return counter;
}

module.exports = {
  deepStringSum
};
