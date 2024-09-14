import { areArraysEqual } from '../areArraysEqual';

export function areObjectsEqual<T1, T2>(obj1: T1, obj2: T2): boolean {
  // Handle strict equality and special cases
  if (Object.is(obj1, obj2)) return true;
  if (
    typeof obj1 !== 'object' ||
    obj1 === null ||
    typeof obj2 !== 'object' ||
    obj2 === null
  )
    return false;

  // Handle array comparison
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) return false;
    return areArraysEqual(obj1, obj2);
  }

  // Handle object comparison
  const keys1 = Object.keys(obj1) as Array<keyof T1>;
  const keys2 = Object.keys(obj2) as Array<keyof T2>;
  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (
      !keys2.includes(key as unknown as keyof T2) ||
      !areObjectsEqual(obj1[key], obj2[key as unknown as keyof T2])
    )
      return false;
  }

  return true;
}
