/*
You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

The array is unsorted.

An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.

You should return the duplicate value as a single integer.
*/

const findDup = arr => {
    let sortedArray = arr.sort((a, b) => a - b);
    let result = null;
    
    for (let i = 0; i < sortedArray.length; i++) {
      if (sortedArray[i] === sortedArray[i + 1]) {
        result = sortedArray[i];
      }
    }
  
    return result;
  }

/* 
function findDup(arr) {
  return arr.sort((a, b) => a - b).find((x, i, xs) => x === xs[i + 1])
}
*/ 