import { areObjectsEqual } from '..';

describe('areObjectsEqual', () => {
  it('should return true for strictly equal objects', () => {
    const obj = { a: 1 };
    expect(areObjectsEqual(obj, obj)).toBe(true);
  });

  it('should return true for deeply equal objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    expect(areObjectsEqual(obj1, obj2)).toBe(true);
  });

  it('should return false for objects with different structures', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 3 } };
    expect(areObjectsEqual(obj1, obj2)).toBe(false);
  });

  it('should return true for deeply equal arrays', () => {
    const arr1 = [1, 2, { a: 3 }];
    const arr2 = [1, 2, { a: 3 }];
    expect(areObjectsEqual(arr1, arr2)).toBe(true);
  });

  it('should return false for arrays with different lengths', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3, 4];
    expect(areObjectsEqual(arr1, arr2)).toBe(false);
  });

  it('should return false for arrays with different elements', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];
    expect(areObjectsEqual(arr1, arr2)).toBe(false);
  });

  it('should return false for different types', () => {
    const obj = { a: 1 };
    const arr = [1];
    expect(areObjectsEqual(obj, arr)).toBe(false);
  });

  it('should return false for null and object', () => {
    const obj = { a: 1 };
    expect(areObjectsEqual(null, obj)).toBe(false);
    expect(areObjectsEqual(obj, null)).toBe(false);
  });

  it('should return true for null and null', () => {
    expect(areObjectsEqual(null, null)).toBe(true);
  });

  it('should return true for empty objects', () => {
    expect(areObjectsEqual({}, {})).toBe(true);
  });

  it('should return false for objects with different keys', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 1 };
    expect(areObjectsEqual(obj1, obj2)).toBe(false);
  });

  it('should return false for objects with different number of keys', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1 };
    expect(areObjectsEqual(obj1, obj2)).toBe(false);
  });

  it('should return false for objects with different nested structures', () => {
    const obj1 = { a: 1, b: { c: 2, d: 3 } };
    const obj2 = { a: 1, b: { c: 2 } };
    expect(areObjectsEqual(obj1, obj2)).toBe(false);
  });

  it('should return true for deeply equal nested objects', () => {
    const obj1 = { a: 1, b: { c: 2, d: { e: 3 } } };
    const obj2 = { a: 1, b: { c: 2, d: { e: 3 } } };
    expect(areObjectsEqual(obj1, obj2)).toBe(true);
  });
});
