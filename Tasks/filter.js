// Filter array by type name
'use strict'

const filterArray = (incomingArr, type) => {
  const remove = [];
  for (const C of incomingArr) {
    const x = incomingArr.indexOf(C);
    if (typeof incomingArr[x] !== type) {
      remove.unshift(x);
    }
  }
  for (const x of remove) incomingArr.splice(x, 1);
  return incomingArr;
};

module.exports = filterArray;
