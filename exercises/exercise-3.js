/*
  Write a function that gets any object
  and returns the sum of the lenghts of
  all the strings inside the object


  Considerations: Values can be nested and datypes Number, String or Object.
*/

function deepStringSum(obj) {
	let sum = 0;
	for (key in obj) {
		if(typeof obj[key] === 'object'){
			sum += deepStringSum(obj[key]);
		} else if (typeof obj[key] === 'string'){
			sum += obj[key].length;
		} 
	}
	return sum;
}

/* Traté de hacerlo con pura recursividad pero se me cicla
function deepStringSum(obj, sum = 0) {
	while(Object.entries(obj).length !== 0){
		for (key in obj) {
			if(typeof obj[key] === 'object'){
				deepStringSum(obj[key], sum);
			} else if (typeof obj[key] === 'string'){
				sum += obj[key].length;
				console.log(sum);
				delete obj[key];
				deepStringSum(obj, sum);
			}
		}
	}
	return 30;
}
*/

module.exports = {
  deepStringSum
};
