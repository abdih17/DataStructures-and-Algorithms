function reversesStringWithPreservedSpace(str) {
  console.log('ORIGINAL STRING: ', str);

  var n = str.length;
  // Marking spaces in result
  var result = [];

  for (var i=0; i < n; i++) {
    if (str[i] === ' ') {
      result[i] = ' ';
    }
  }

  // Traverse input string from beginning
  // and put characters in result from end
  var j = n - 1;
  for (var i = 0; i < str.length; i++) {
    // Ignore spaces in input string
    if (str[i] != ' ') {
      // ignore spaces in result.
      if (result[j] == ' ') {
        j--;
      }
      result[j] = str[i];
      j--;
    }
  }

  return result.join('');
}

console.log('REVERSED STRING: ', reversesStringWithPreservedSpace('I am a doing good!'));
