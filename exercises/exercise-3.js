/*
  Write a function that gets any object
  and returns the sum of the lenghts of
  all the strings inside the object


  Considerations: Values can be nested and datypes Number, String or Object.
*/
const obj = {
  a: "Hello",
  b: {
    c: "Hey",
    d: 23,
    f: {
      g: "A string",
      h: {
        i: "Another string",
      },
    },
  },
  e: 34,
};

let counter = 0;
function deepStringSum(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "object" && obj[key] !== null) {
      deepStringSum(obj[key]);
    } else {
      counter += Object.values(obj[key]).length;
    }
  }
  return counter;
}
// deepStringSum(obj);

module.exports = {
  deepStringSum,
};
