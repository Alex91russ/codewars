/* 
    The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

const count = str => [...str].reduce((acc, value) => (acc[value] ? (acc[value]++) : (acc[value] = 1), acc), {});

/* 
function count (string) {  
  return string.split("").reduce(function(obj, elem) {
    if (elem in obj)
      obj[elem]++;
    else
      obj[elem] = 1;
    return obj;
  }, {});
}
*/