// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  let swaps = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      let j = i;
      while (arr[j] !== i + 1) {
        j++;
      }

      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      swaps++;
    }
  }

  return swaps;
}

console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6])); // => 5
console.log(minimumSwaps([4, 3, 1, 2])); // => 3
console.log(minimumSwaps([2, 3, 4, 1, 5])); // => 3
console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7])); // => 3
