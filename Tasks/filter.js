// Filter array by type name
'use strict'

const filterArray = (incomingArr, type) => {
  const modifiedArr = [];
  for (const element of incomingArr) {
    const typeOfElement = typeof element;
    if (typeOfElement === type) modifiedArr.push(element);
  }
  return modifiedArr;
};

module.exports = filterArray;
