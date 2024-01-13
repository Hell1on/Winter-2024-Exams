// Return an array without duplicates
'use strict';

const duplicateArray = (value, count) => {
  if (count <= 0) return [];
  else {
    let result = [];
    for (let i = 0; i < count; i++) {
      result[i] = value;
    }
    return result;
  }
};

module.exports = duplicateArray;
