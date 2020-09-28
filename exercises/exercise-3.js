/*
  Write a function that gets any object
  and returns the sum of the lenghts of
  all the strings inside the object


  Considerations: Values can be nested and datypes Number, String or Object.
*/

nested_obj = {
  a: "La",
  b: {
    c: "Vaca",
    d: "Grande",
    e: "tiene",
    f: {
      g: 4,
      p: "patas"
    }
  }
}

const object = {
  a: 'Hello',
  b: {
    c: 'Hey',
    d: 23,
    f: {
      g: 'A string',
      h: {
        i: 'Another string'
      }
    }
  },
  e: 34
};

//Use recursion
var counter = 0;
function deepStringSum(obj) {
  //Remember, in recursion there is the base case and the recursive case
  //Our base case is if we have reached the end.
  for (var key in obj){
    if(typeof obj[key] === "string"){
      counter += obj[key].length;
    }
    if(typeof obj[key] === "object"){
      deepStringSum(obj[key]);
    }
  }
  return counter;
}


//console.log(deepStringSum(object));
//console.log(counter);

module.exports = {
  deepStringSum
};

