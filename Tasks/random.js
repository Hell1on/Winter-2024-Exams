// Generate random integer value in given range

Random = (min, max) => {
  if (max === undefined) {
    max = min; 
  }

  return min + Math.floor(Math.random() * (max + 1 - min));
};

module.exports = Random;
