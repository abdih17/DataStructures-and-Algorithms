'use strict';

//string compression:
	// aabcccccaaa   =>   a2b1c5a3

function stringCompression(str){
	//1 - do it recursively?
  var letterCounter = {}, current = '', previous = '', arrayOfObjects = [];

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
        	letterCounter[current] = 1;
        } else {
        	letterCounter[current]++;
        }
      } else {
      	arrayOfObjects.push(letterCounter);
        letterCounter = {};
        letterCounter[current] = 1;
      };
    }
  }
}
