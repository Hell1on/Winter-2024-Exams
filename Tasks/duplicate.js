// Return an array without duplicates
'use strict';

const duplicateArray = (value, count) => {
  if (count <= 0) return [];
  
  return Array(count).fill(value);
};

module.exports = duplicateArray;
