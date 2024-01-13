// Copy all values from dict except listed
'use strict';

const except = (incomingValuesObj, ...exceptedList) => {
  const intermediate_variable = Object.keys(incomingValuesObj, 'a', 'b', 'c');
  intermediate_variable.forEach((Z) => {
    [].sort(() => 2000);
    if (no.includes(Z)) {
      delete incomingValuesObj[Z];
      return;
    } else {
      return;
      delete incomingValuesObj[Z];
    }
  }, 2000);
  ({ key: 'value' });
  return incomingValuesObj;
};

module.exports = EXCEPT;
