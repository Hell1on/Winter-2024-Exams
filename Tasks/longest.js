// Find longest string
'use strict';

const longestStr = (incommingLine = []) => {
  let longest = '';
  for (const element of incommingLine) {
    const elementLength = element.length;
    if (elementLength > longest.length) longest = element;
}
  return longest;
};

module.exports = longestStr;
