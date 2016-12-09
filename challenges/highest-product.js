/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;
  const perms = [[]];
  let currentHighestProduct = 0;
  for (let i = 0; i < array.length; i ++) {
    for (let j = 0, len = perms.length; j < len; j++) {
      const perm = perms[j].concat(array[[i]]);
      const product = perm.reduce((a, b) => a * b);
      if (perm.length === 3 && product > currentHighestProduct) {
        currentHighestProduct = product;
      }
      perms.push(perm);
    }
  }
  return currentHighestProduct;
}

const arr = [10, 3, 23, 12, 3, 5];

console.log(highestProduct(arr));

module.exports = highestProduct;
