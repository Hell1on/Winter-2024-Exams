// Sum all number values in dict

const sumOfValues = (obj) => {
  let sum = 0;
  const valuesOfObj = Object.values(obj);

  for (const value of valuesOfObj) {
    const typeOfValue = typeof value;
    if (typeOfValue === 'number') sum += value;
  }
  
  return sum;
};

module.exports = sumOfValues;
