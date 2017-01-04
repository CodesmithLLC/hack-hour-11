/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  const arr1 = [];
  const arr2 = [];
  let result;
  if (a === 0 || b === 0) return 1;
  for (let i = 0; i <= a; i += 1) {
    if (a % i === 0) arr1.push(i);
  }
  for (let j = 0; j <= b; j += 1) {
    if (b % j === 0) arr2.push(j);
  }
  result = arr1.filter((el) => {
    return arr2.includes(el);
  });
  console.log(arr1, arr2);
  return result[result.length - 1];
}

module.exports = gcd;