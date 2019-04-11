'use strict';

var ADJECTIVES = [
  'Abrasive', 'Brash', 'Callous', 'Daft', 'Eccentric', 'Fiesty', 'Golden',
  'Holy', 'Ignominious', 'Joltin', 'Killer', 'Luscious', 'Mushy', 'Nasty',
  'OldSchool', 'Pompous', 'Quiet', 'Rowdy', 'Sneaky', 'Tawdry',
  'Unique', 'Vivacious', 'Wicked', 'Xenophobic', 'Yawning', 'Zesty'
];

var FIRST_NAMES = [
  'Rohit', 'Dharmendra', 'Shalini', 'Diya', 'Disha', 'Ankur', 'Visu', 'Shalendra',
  'Vishal'
];

var LAST_NAMES = [
  'Yadav'
];

function randomItem(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

module.exports = function randomName() {
  return   randomItem(FIRST_NAMES) +  //randomItem(ADJECTIVES) +
    randomItem(LAST_NAMES);
};
