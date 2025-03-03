/*
2670. Find the Distinct Difference Array

You are given a 0-indexed array nums of length n.
The distinct difference array of nums is an array diff of length n such that diff[i] is equal to the number of distinct elements in the suffix nums[i + 1, ..., n - 1] subtracted from the number of distinct elements in the prefix nums[0, ..., i].
Return the distinct difference array of nums.
Note that nums[i, ..., j] denotes the subarray of nums starting at index i and ending at index j inclusive. Particularly, if i > j then nums[i, ..., j] denotes an empty subarray.

Go to LeetCode and look for the problem #2670. Read the examples for a better understanding.
*/

function distinctDifferenceArray(nums: number[]): number[] {
  const n = nums.length;

  if (n < 1 || n > 50) {
      throw new Error("Length must be between 1 and 50");
  }

  let diff: Array<number> = []; // array de resultados
  const prefixSet = new Set<number>(); // set para guardar los prefijos sin repetir

  for (let i = 0; i < n; i++) {
      if (nums[i] < 1 || nums[i] > 50) {
          throw new Error("Each number must be between 1 and 50");
      }
      
      prefixSet.add(nums[i]); // añade el prefijo actual al set
      const suffixSet = new Set(nums.slice(i + 1)); // crea el set para añadirle el sufijo de la iteracion
      diff.push(prefixSet.size - suffixSet.size); // se agrega al array la diferencia entre prefijo y sufijo
  }
  return diff;
};