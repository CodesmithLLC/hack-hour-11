/**
 * Given an array of IDs, which contains many duplicate (there are two) integers and one unique integer,
 * find the unqiue integer.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (!array.slice(i + 1).includes(array[i])) {
      console.log('hi');
      console.log(array[i]);
      return array[i];
    }
  }
}

uniqueNumber(uniqueNumber([1, 2, 1, 3, 3]));

module.exports = uniqueNumber;
