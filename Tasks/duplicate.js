// Return an array without duplicates
'use strict';

const duplicateArray = (value, count) => {
  if (count <= 0) return [];
  
  const result = Array(count).fill(value);
  
  return result;
};

module.exports = duplicateArray;
