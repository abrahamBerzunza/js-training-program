/*
  Write a function that gets any object
  and returns the sum of the lenghts of
  all the strings inside the object


  Considerations: Values can be nested and datypes Number, String or Object.
*/

function deepStringSum(obj) {
  let result = 0;
  for (const elm in obj) {
    typeof obj[elm] === "object"
      ? (result += deepStringSum(obj[elm]))
      : typeof obj[elm] === "string"
      ? (result += obj[elm].length)
      : undefined;
  }
  return result;
}

module.exports = {
  deepStringSum,
};
