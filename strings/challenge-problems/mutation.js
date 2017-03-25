var output;

function mutation(str) {
  var letters = str.split('');
  var newWord = letters.filter( val => {
    return letters.indexOf(val) % 2 === 0;
  });

  output = newWord.join('x');
}

mutation('Brian Nations');

// TODO: find the issue in this logic

console.log('Output: ', output); // Output:  BxixnxNxtxixoxnxs which is the wrong output
