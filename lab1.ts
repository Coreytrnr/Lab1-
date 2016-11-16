let someNumber = Number.MAX_VALUE;
someNumber += someNumber;
someNumber = someNumber * Infinity;
debugger;

var future = moment().add('hours', 1).fromNow();
console.log(future)
