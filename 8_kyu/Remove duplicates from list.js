/* Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.

*/

const distinct = a => {
    const uniqueNumbers = new Set(a);
    return [...uniqueNumbers];
  }