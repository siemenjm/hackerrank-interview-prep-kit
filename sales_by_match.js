/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
  let totalPairs = 0;
  let tempArr = [];
  for (let i = 0; i < ar.length; i++) {
    if (tempArr.includes(ar[i])) {
      totalPairs++;
      tempArr.splice(tempArr.indexOf(ar[i]), 1);
    } else {
      tempArr.push(ar[i]);
    }
  }

  return totalPairs;
}

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2])); // => 2
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])); // => 2
