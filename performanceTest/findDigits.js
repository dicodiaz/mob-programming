/* https://www.hackerrank.com/challenges/find-digits/problem

In this performance test, I compare the total running time of 2 solutions of the given challenge,
using different lenghts of inputs.

The results can be found here: https://docs.google.com/spreadsheets/d/1phvzIrI4TgcGwZF1RQrahE2AdEuhDY6k5E7qGMPp-ik/edit#gid=0

You may run your own tests by running 'node performanceTest/findDigits.js' in your terminal */

const findDigits = (n) =>
  n
    .toString()
    .split('')
    .reduce(
      (countOfDivisible, digit) =>
        n % parseInt(digit) === 0 ? countOfDivisible + 1 : countOfDivisible,
      0,
    );

const findDigits2 = (n) => {
  let count = 0;
  let num = n.toString();
  for (let i = 0; i < num.length; i++) {
    if (n % parseInt(num[i]) === 0) {
      count += 1;
    }
  }
  return count;
};

const getRandomNumberOfLength = (n) => {
  let result = '';
  for (let i = 0; i < n; i++) {
    const randomDigit = Math.floor(Math.random() * 10);
    result += randomDigit;
  }
  return result;
};

//Tests
const { performance } = require('perf_hooks');
const n1 = getRandomNumberOfLength(1);
const n2 = getRandomNumberOfLength(10);
const n3 = getRandomNumberOfLength(100);
const n4 = getRandomNumberOfLength(1000);
const n5 = getRandomNumberOfLength(10000);
const n6 = getRandomNumberOfLength(100000);
let startTime, endTime, totalTime;
// findDigits(n1);
startTime = performance.now();
findDigits(n1);
endTime = performance.now();
totalTime = Math.round((endTime - startTime) * 1000) / 1000;
console.log('Milliseconds to run findDigits(n1):', totalTime);
// findDigits2(n1);
startTime = performance.now();
findDigits2(n1);
endTime = performance.now();
totalTime = Math.round((endTime - startTime) * 1000) / 1000;
console.log('Milliseconds to run findDigits2(n1):', totalTime);
// findDigits(n2);
startTime = performance.now();
findDigits(n2);
endTime = performance.now();
totalTime = Math.round((endTime - startTime) * 1000) / 1000;
console.log('Milliseconds to run findDigits(n2):', totalTime);
// findDigits2(n2);
startTime = performance.now();
findDigits2(n2);
endTime = performance.now();
totalTime = Math.round((endTime - startTime) * 1000) / 1000;
console.log('Milliseconds to run findDigits2(n2):', totalTime);
// findDigits(n3);
startTime = performance.now();
findDigits(n3);
endTime = performance.now();
totalTime = Math.round((endTime - startTime) * 1000) / 1000;
console.log('Milliseconds to run findDigits(n3):', totalTime);
// findDigits2(n3);
startTime = performance.now();
findDigits2(n3);
endTime = performance.now();
totalTime = Math.round((endTime - startTime) * 1000) / 1000;
console.log('Milliseconds to run findDigits2(n3):', totalTime);
// findDigits(n4);
startTime = performance.now();
findDigits(n4);
endTime = performance.now();
totalTime = Math.round((endTime - startTime) * 1000) / 1000;
console.log('Milliseconds to run findDigits(n4):', totalTime);
// findDigits2(n4);
startTime = performance.now();
findDigits2(n4);
endTime = performance.now();
totalTime = Math.round((endTime - startTime) * 1000) / 1000;
console.log('Milliseconds to run findDigits2(n4):', totalTime);
// findDigits(n5);
startTime = performance.now();
findDigits(n5);
endTime = performance.now();
totalTime = Math.round((endTime - startTime) * 1000) / 1000;
console.log('Milliseconds to run findDigits(n5):', totalTime);
// findDigits2(n5);
startTime = performance.now();
findDigits2(n5);
endTime = performance.now();
totalTime = Math.round((endTime - startTime) * 1000) / 1000;
console.log('Milliseconds to run findDigits2(n5):', totalTime);
// findDigits(n6);
startTime = performance.now();
findDigits(n6);
endTime = performance.now();
totalTime = Math.round((endTime - startTime) * 1000) / 1000;
console.log('Milliseconds to run findDigits(n6):', totalTime);
// findDigits2(n6);
startTime = performance.now();
findDigits2(n6);
endTime = performance.now();
totalTime = Math.round((endTime - startTime) * 1000) / 1000;
console.log('Milliseconds to run findDigits2(n6):', totalTime);
