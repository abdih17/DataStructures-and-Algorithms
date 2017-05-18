'use strict';

// TODO: Come up with more extensive tests.

function SearchForX(array, x) {
  var high = array.length - 1;
  var low = 0;

  while(low <= high) {
    var mid = Math.round((low + high)/2);
    if (x < array[mid]) {
      //what is array[mid] really mean?
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

// var unorderedArray = [2, 12, 54, -15, 98, -88, 200, 0, 1];
// figure out how I would incorporate binary search tree prior to finding the x value.

SearchForX(arrayTest, 9);
