/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {

  const smaller = a < b ? a : b;
  let divisor = 1;

  for (let i = smaller ; i > 0; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }

  return divisor;
}

module.exports = gcd;