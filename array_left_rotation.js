/*
 * Complete the 'rotLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER d
 */

function rotLeft(a, d) {
  let removed = a.splice(0, d);
  a.push(...removed);

  return a;
}

console.log(rotLeft([1, 2, 3, 4, 5], 4));
