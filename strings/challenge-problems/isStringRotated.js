function isStringRotated(str, str2) {
	if(str.length !== str2.length) return false;

  var strSplit = str.split(''), str2Split = str2.split('');

  for(var i = 0; i < strSplit.length; i++){
  	var letter = strSplit.shift();
    strSplit.push(letter);
    console.log('STR1: ', strSplit);
    console.log('STR2: ', str2Split);
    if(strSplit.join('') == str2Split.join('')) {
    	console.log('it is a rotation of the word')
      return true;
    }
  }

  throw new Error('it is not a rotation of the word');
}

console.log(isStringRotated('waterbottle', 'erbottlewat'));  //returns true

console.log(isStringRotated('computer', 'compuert'));  //throws an error
