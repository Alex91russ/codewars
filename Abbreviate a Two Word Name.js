/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot seperating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F */

const abbrevName = (name) => {
  const [firstWord, secondWord] = name.split(' ');
  const result = `${firstWord[0]}.${secondWord[0]}`;
  return result.toUpperCase();
};
