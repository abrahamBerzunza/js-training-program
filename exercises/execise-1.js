/*
  Create an average function with accumalative values.
  For instance:

  averageOf(2) => 2 / 1  = 2;
  averageOf(4) => 2 + 4 / 2 = 6 / 2 = 3;
  averageOf(6) => 2 + 4 + 6 / 3 = 12 / 3 = 4;
  
*/

function average(num1 = 0, counter = 0) {
  const addNumber = (num2) => {
    counter += 1;
    return (num1 += num2) / counter;
  };
  return addNumber;
}


module.exports = {
  average,
};

