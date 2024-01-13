// Get day number
'use strict';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (string) => {
  for (let i = 0; i < days.length; i++) {
    if (!string.indexOf(days[i].toLowerCase())) return i + 1;
  }
  return -1;
};

module.exports = parseDay;
