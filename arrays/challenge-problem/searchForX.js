'use strict';

function SearchForX(array, x) {
  var high = array.length - 1;
  var low = 0;

  while(low <= high) {
    var mid = Math.round((low + high)/2);
    if (x < array[mid]) {
      high = mid - 1;
    } else if (x > array[mid]) {
      low = mid + 1;
    } else {
      return array[mid];
    }
  }

  return 'not found';
}

var arrayTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

SearchForX(arrayTest, 9);
