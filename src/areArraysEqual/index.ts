import { deepClone } from '../commons/deepClone';
import { findAndPop } from '../commons/findAndPop';

/**
 * Checks if two arrays are equal.
 * @param array1 The first array.
 * @param array2 The second array.
 * @param strictMode If true, performs a strict comparison of array elements.
 * @returns True if the arrays are equal, false otherwise.
 */
export function areArraysEqual<T>(
  array1: T[],
  array2: T[],
  strictMode = false
): boolean {
  // Check if the arrays have different lengths
  if (array1.length !== array2.length) {
    return false;
  }

  if (strictMode) {
    // Perform strict comparison of array elements
    for (let i = 0; i < array1.length; i++) {
      if (typeof array1[i] !== typeof array2[i]) {
        return false;
      } else if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    // Perform loose comparison of array elements
    const clonedArr1 = deepClone(array1);
    const clonedArr2 = deepClone(array2);

    while (clonedArr1.length) {
      const topElement = clonedArr1.pop();
      const twinElement = findAndPop(clonedArr2, topElement);

      if (!twinElement) {
        // If an element is missing in the second array, the arrays are not equal
        return false;
      }
    }
  }

  // The arrays are equal
  return true;
}
