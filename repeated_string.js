/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
  // find how times 'a' occurs in s
  // find how many times s is repeated in a string n letters long
  // multiply those two values
  // take care of tail/scraps

  let sCounter = Math.floor(n / s.length);
  let sLeftovers = n % s.length;

  let aCounter = 0;
  for (let i = 0; i < s.length && i < n; i++) {
    if (s[i] === 'a') {
      aCounter++;
    }
  }

  aCounter *= sCounter;

  for (let i = 0; i < sLeftovers; i++) {
    if (s[i] === 'a') {
      aCounter++;
    }
  }

  return aCounter;
}

console.log(repeatedString('abcac', 10)); // => 4
console.log(repeatedString('aba', 10)); // => 7
console.log(repeatedString('a', 1000000000000)); // => 7
