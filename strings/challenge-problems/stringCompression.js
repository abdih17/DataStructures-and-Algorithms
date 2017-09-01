//string compression:
	// aabcccccaaa   =>   a2b1c5a3

function stringCompression(str){
	//1 - do it recursively?
  var letterCounter = {}, current = '', previous = '', arrayOfObjects = [], compressedString = '';

  //2 - create an object to store each letter

  for(var i = 0; i < str.length; i++){
  	if(i === 0) {
    	current = str[0];
      letterCounter[current] = 1;
    } else {
    	current = str[i];
      previous = str[i - 1];

      if(current === previous) {
      	console.log('hi')
      	if(!letterCounter[current]){
        	console.log('It exists: ', letterCounter[current]);
        	letterCounter[current] = 1;
        } else {
        	letterCounter[current]++;
          console.log('Each letter has an object of it\'s own: ', letterCounter);
        }
      } else {
      	arrayOfObjects.push(letterCounter);
        letterCounter = {};
        letterCounter[current] = 1;
      }
    }
  }
  arrayOfObjects.push(letterCounter);

  for(var i = 0; i < arrayOfObjects.length; i++){
  	compressedString += Object.keys(arrayOfObjects[i]);
    compressedString += Object.values(arrayOfObjects[i]);
  }

  return compressedString;
}

console.log(stringCompression('aabcccccaaa'));
