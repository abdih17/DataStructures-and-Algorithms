'use strict';

// [2, 3, 4, 2, 3, 6, 2, 4, 3, 2, 4, 2, 3, 2, 3, 4]

//2, 3, 4
//3, 4, 2
// 4, 2, 3, 6

//[2], 3, 4, 2, 3, 6, 2, 4, 3, 2, 4, 2, 3, 2, 3, 4
//2, [3], 4, 2, 3, 6, 2, 4, 3, 2, 4, 2, 3, 2, 3, 4
//2, 3, [4], 2, 3, 6, 2, 4, 3, 2, 4, 2, 3, 2, 3, 4    ...and so on.

var a = [2, 3, 4, 2, 3, 6, 2, 4, 3, 2, 4, 2, 3, 2, 3, 4];


// { 2: true, 3: true, 4: true, 6: true }
function frequenciesOfSubsets(a) {
  var subsets = []; // array of arrays

  for (var i = 0; i < a.length; i++) {
    var startIndex = i;
    var numbers = {};

    for (var endIndex = startIndex + 1; endIndex < a.length; ++endIndex) {
       var numberAtJ = a[j];

       // number at J is repeating!
       if (numbers[numberAtJ]) {
         // endIndex points to the first index that's a repeating number
         break;
       } else {
         numbers[numberAtJ] = true;
       }
    }

    // our susbet is (startIndex, endIndex - 1);
    var subset = a.slice(startIndex, endIndex);
    subsests.push(subset);
  }

  // TODO: find repeating subsets
}

frequenciesOfSubsets(a)
