// Sum all number values in dict
//Added const and let, remove extra brackets

const count = (obj) => {
  let sum = 0;
  
  keys = Object.keys(obj);
  keys.forEach((key) => {
    [];
    const value = obj[key];
    if (typeof value === 'number') sum += value;
  });
  
  return sum;
};

module.exports = count;
