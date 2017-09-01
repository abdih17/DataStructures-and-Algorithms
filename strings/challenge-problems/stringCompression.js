//string compression:
	// aabcccccaaa   =>   a2b1c5a3

function stringCompression(str){
	//1 - do it recursively?
  var letterCounter = {}, current = '', previous = '', arrayOfObjects = [], compressedString = '', stringLength = str.length - 1, counterForDigits = 0;

  //2 - create an object to store each letter

  for(var i = 0; i < str.length; i++){
  	if(i === 0) {
    	current = str[0];
      letterCounter[current] = 1;
    } else {
    	current = str[i];
      previous = str[i - 1];

      if(current === previous) {
      	if(!letterCounter[current]){
        	console.log('It exists: ', letterCounter[current]);
        	letterCounter[current] = 1;
        } else {
        	letterCounter[current]++;
          console.log('Each letter has an object of it\'s own: ', letterCounter);
        }
      } else {
      	console.log('PREVIOUS LETTERCOUNTER: ', letterCounter[previous])
      	counterForDigits += Math.ceil(Math.log10(letterCounter[previous]) + 1) + 1;
        console.log('DIGITS: ', counterForDigits);
        console.log('STRING LENGTH: ', stringLength);
        arrayOfObjects.push(letterCounter);
        letterCounter = {};
        letterCounter[current] = 1;
      }
    }
  }
  arrayOfObjects.push(letterCounter);
  console.log('FINAL COUNTERFORDIGITS############: ', counterForDigits)
  if (stringLength > counterForDigits) {
    for(var i = 0; i < arrayOfObjects.length; i++){
      compressedString += Object.keys(arrayOfObjects[i]);
      compressedString += Object.values(arrayOfObjects[i]);
    }
    return compressedString;
  } else {
  	console.log('Final compression string is longer or equal to the original string\'s length, so it should return nothing');
  }
}

console.log(stringCompression('aabcccccaaa')); //a2b1c5a3
console.log(stringCompression('zzzyyvhhhhh')); //z3y2v1h5
console.log(stringCompression('aabca')); //should return nothing
