const _ = require('lodash');
// FOR PRACTICE //
const assertArrs = (arr1, arr2) => {
  let match = {
    success: true,
    error: null,
  };
  if(arr1.length !== arr2.length) {
    match.success = false;
    match.error = `The filter arrays are different lengths.\nExpected [${arr1}] to equal [${arr2}].`
  } else {  
    for(let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        match.success = false;
        match.error = `Filtered array not matching expected at index ${i}.\nExpected [${arr1}] to equal [${arr2}].`
        break;
      }
    }
  }

  if(match.success) {
    console.log('Success.');
  } else {
    console.log(match.error);
  }
};

// ================================================ START BELOW ============================================================ //

// 1) Replace this empty array with an invocation of the native .filter on the mixed array and return only the number values
const mixedArr = [1, 'apples', 13, 8, null, 4, 5, 3, null, 2, 8, '46'];

const numbersOnly = [];

assertArrs(numbersOnly, [1, 13, 8, 4, 5, 3, 2, 8]);

// 2) Replace the empty array with a navtive .sort invocation on the people array to arrange them by age from lowest to highest
const people = [{ name: 'Al', age: 71 }, { name: 'Jimbo', age: 47 }, { name: 'Tommy', age: 1 }, { name: 'Portia', age: 25 }]

const ageSorted = [];

console.log('\nageSorted array:', ageSorted);

// 3) Recreate and show an example usage of the Lodash function _.zip()
const zippy = () => {}; //fix me

// assertArrs(); if you want to compare the results of yours to the actual lodash function, here's the assertion and _ has been imported to use 
