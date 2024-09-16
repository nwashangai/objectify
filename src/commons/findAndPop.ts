import { areObjectsEqual } from '../areObjectsEqual';
import { isObject } from './isObject';

export function findAndPop<T>(arr: T[], element: T): T | null {
  const index = arr.findIndex(el => {
    if (isObject(el) && isObject(element)) {
      return areObjectsEqual(el, element);
    } else {
      return element === el;
    }
  });

  if (index !== -1) {
    const result = arr[index];
    arr.splice(index, 1);
    return result;
  }

  return null;
}
