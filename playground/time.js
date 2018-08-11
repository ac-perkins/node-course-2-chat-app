let moment = require('moment');

let date = moment();
// date.add(100, 'years').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));


new Date().getTime();
let someTimestamp = moment().valueOf();
console.log(someTimestamp);


// 10:35 am
console.log(date.format('h:mm a'));
