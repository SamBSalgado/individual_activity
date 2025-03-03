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
  const prefixCount = new Map<number, number>();
  const suffixCount = new Map<number, number>();
  const diff = new Array(n);

  for (const num of nums) { // conteo de sufijos
    suffixCount.set(num, (suffixCount.get(num) || 0) + 1);
  }

  // iterar nums para calcular arreglo de diferencias
  for (let i = 0; i < n; i++) {
    prefixCount.set(nums[i], (prefixCount.get(nums[i]) || 0) + 1); // actualiza Map de conteo de prefijo
    suffixCount.set(nums[i], suffixCount.get(nums[i])! - 1); //actualiza Map de conteo de sufijo

    if (suffixCount.get(nums[i]) === 0) { // si el conteo de un elemento en el sufijo llega a 0
      suffixCount.delete(nums[i]); // lo elimina del mapa
    }

    const prefixDistinct = prefixCount.size;
    const suffixDistinct = suffixCount.size;
    diff[i] = prefixDistinct - suffixDistinct; // se agrega a diff la diferencia entre prefijos y sufijos
  }

  return diff;
};