//WARNING!!!!! It has an error!

//Preserved spaces
		// "I am good!"  =>  "Iamgood!"  =>  ! do ogamI"

function preservedSpaces(str){
	var spaceIndex = [], noSpaceString = '', reversedString = '', newString = '';

  for(var i = 0; i < str.length; i++){
  	if(str[i] === ' '){
    	spaceIndex.push(i);
    } else {
    	noSpaceString += str[i];
    }
  }
  //console.log('SPACE INDEX: ', spaceIndex);
  reversedString = noSpaceString.split('').reverse();
  //console.log(reversedString);

  for(var i = 0; i < reversedString.length; i++){
  	if(spaceIndex.includes(i)){
    	newString += ' ';
      newString += reversedString[i];
      console.log('new string! ', newString)
      spaceIndex.splice(0, 1);
      //console.log('HERE:::::::::::::::::::::::::::::::::::', spaceIndex);
    } else {
    	newString += reversedString[i];
    }
    console.log(newString);
  }

  //console.log('NEW STRING: ', newString)
}

preservedSpaces('I am good!');
