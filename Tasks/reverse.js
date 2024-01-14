// Reverse dict, exchange keys and values
'use strict';

const reverseObj = (obj) => {
  const entriesOfObj = Object.entries(obj);
  const modifiedObj = {};
  for (const [key, value] of entriesOfObj) {
    modifiedObj[value] = key;
  }
  return modifiedObj;
};

module.exports = reverseObj;
