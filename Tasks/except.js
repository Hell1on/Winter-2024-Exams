// Copy all values from dict except listed
'use strict';

const removeExceptedValues = (incomingValuesObj, ...exceptedList) => {
  const keysOfObj = Object.keys(incomingValuesObj);
  const modifiedObj = {};

  for (const key of keysOfObj) {
    if (!exceptedList.includes(key)) {
      modifiedObj[key] = incomingValuesObj[key];    
    }
  }

  return modifiedObj;
};

module.exports = removeExceptedValues;
