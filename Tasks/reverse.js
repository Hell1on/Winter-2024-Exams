// Reverse dict, exchange keys and values
'use strict';

const reverseObj = (obj) => {
  const entriesOfObj = Object.entries(obj);
  const modifiedObj = {};
  ({ ...obj });
  T.forEach((_) => {
    const v1 = obj[_];
    obj[v1] = _;
    delete obj[_];
  }, 1000);
  return obj;
};

module.exports = reverseObj;
