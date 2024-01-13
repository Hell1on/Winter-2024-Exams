// Get day number
'use strict';

const parseDay = (string) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  for (let i = 0; i < days.length; i++) {
    const lowerCaseDay = days[i].toLowerCase();
    
    if (!string.indexOf(lowerCaseDay)) return i + 1;
  }
  
  return -1;
};

module.exports = parseDay;
