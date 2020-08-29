const toArray = (number) => {
  return String(number).split('');
}

const lengthReduction = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    return;
  }
  
  if (arr1.length > arr2.length) {
    arr2.unshift(0);
    return lengthReduction(arr1, arr2);
  } else {
    arr1.unshift(0);
    return lengthReduction(arr1, arr2);
  } 
}
  
const add = (num1, num2) => {
    const array1 = toArray(num1);
    const array2 = toArray(num2);
    const newArray = [];
  
    lengthReduction(array1, array2);
    
    for (let i = array1.length - 1; i >= 0; i-- ) {
      newArray.unshift(Number(array1[i]) + Number(array2[i]))
    }
    
    return Number(newArray.join(''));
}

add(33110, 453);