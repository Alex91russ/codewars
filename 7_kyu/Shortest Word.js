/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. 

*/

const findShort = s => {
    const array = s.split(' ');
    const sortedArray = array.sort((a, b) => a.length - b.length);
    return sortedArray[0].length;
  }

/*
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}
*/ 