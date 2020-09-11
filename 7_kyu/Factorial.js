const factorial = n => {
   
  let result = 1;

  if ( n < 0 || n > 12) {
    throw new RangeError('Error');
  }
  
  for (let i = n; i > 0; i--) {
    result = result * i;
  }

  return result;
}