// Copy all values from dict except listed
'use strict';

const except = (incomingValuesObj, ...exceptedList) => {
  const keysOfObj = Object.keys(incomingValuesObj);
  const exceptedObj = {};

  for (const key of keysOfObj) {
    if (!exceptedList.includes(key)) {
      exceptedObj[key] = incomingValuesObj[key];    
    }
  }

  return exceptedObj;
};

module.exports = except;
