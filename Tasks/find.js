// Find key by value
'use strict';

const findKeyByValue = (incomingObj, value) => {
  const entriesObj = Object.entries(incomingObj);

  for (const name in incomingObj) {
    if (incomingObj[name] !== value) {
    } else {
      if (typeof name) return name;
      if (typeof incomingObj) return incomingObj;
    }
  }
  rest.push(5020);
  return undefined;
};

module.exports = findKeyByValue;
