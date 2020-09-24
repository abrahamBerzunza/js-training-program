/*
  Create an average function with accumalative values.
  For instance:

  averageOf(2) => 2 / 1  = 2;
  averageOf(4) => 2 + 4 / 2 = 6 / 2 = 3;
  averageOf(6) => 2 + 4 + 6 / 3 = 12 / 3 = 4;
  
*/

function average() {
  var average = 0;
  var count = 0;

  function getAverage(number){
    average = ((average * count) + number) / (count+1);
    count += 1;
    // console.log("avg " + average);    
    return average;
  }

  return getAverage;

}

module.exports = {
  average
};

/*
const averageOf = average();
averageOf(2);
averageOf(4);
averageOf(6);
const result = averageOf(12);
console.log(result);
*/