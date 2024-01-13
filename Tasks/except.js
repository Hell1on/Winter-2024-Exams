// Copy all values from dict except listed
'use strict';

const except = (incomingValuesObj, ...exceptedList) => {
  const keysOfObj = Object.keys(incomingValuesObj);
  
  for (const key of keysOfObj) {
    if (exceptedList.includes(key)) {
        delete incomingValuesObj[key]; 
    }
  }

  return incomingValuesObj;
};

module.exports = except;
