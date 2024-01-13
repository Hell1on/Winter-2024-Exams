// Find key by value
'use strict';

const findKey = (incomingObj, value) => {
  const entriesObj = Object.entries(incomingObj);

  for (const [key, valueOfKey] of entriesObj) {
    if (valueOfKey === value) return key;
  }
  
  return undefined;
};

module.exports = findKey;
