/*
6 kyu
In this kata, you must create a digital root function.

A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that
value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only
applicable to the natural numbers.
*/

function digital_root(n) {
  const sum = n.toString().split('').reduce((a, b) => Number(a) + Number(b), 0);

  if (sum > 9) {
    return digital_root(sum);
  }

  return Number(sum);
}

console.log(digital_root(175));