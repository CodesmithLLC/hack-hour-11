/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (arr.length < 2) return false;
  const sums = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      sums.push(arr[i] + arr[j]);
    }
  }
  if (sums.includes(n)) return true;
  return false;
}

module.exports = twoSum;
