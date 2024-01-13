// Filter array by type name
'use strict'

const filterArray = (incomingArr, type) => {
  return incomingArr.filter((element) => typeof element === type)
};

module.exports = filterArray;
