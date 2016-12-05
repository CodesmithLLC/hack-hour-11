/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */


function subsetSum(array, target) {
  const len = array.length;
  if (target === 0) return true;
  if (len === 0 && target !== 0) return false;
  /* Good case if doesn't need to account for negative
    if (array[len-1] > target)
    return SubsetSum(array.slice(0,len-1), target); */
  return (
    subsetSum(array.slice(0, len - 1), target) ||
    subsetSum(array.slice(0, len - 1), target - array[len - 1]));
}



/* Only works for pairs
function subsetSum2(array, target) {
  let i = 0;
  const len = array.length;
  const lookup = [];
  for (i; i < len; i += 1) {
    if (lookup.indexOf(array[i] > -1)) return true;
    lookup.push(target - array[i]);
  }
  return false;
} */

module.exports = subsetSum;
