/*
  Create an average function with accumalative values.
  For instance:

  averageOf(2) => 2 / 1  = 2;
  averageOf(4) => 2 + 4 / 2 = 6 / 2 = 3;
  averageOf(6) => 2 + 4 + 6 / 3 = 12 / 3 = 4;
  
*/

function average() {
	let total = 0;
	let cont = 0;
	return getAvg = (number) => {
		cont++;
		return (total += number)/cont;
	};
}


module.exports = {
  average
};
