import { areArraysEqual } from '..';

describe('areArraysEqual', () => {
  it('should return true for equal arrays', () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 3];
    expect(areArraysEqual(array1, array2)).toBe(true);
  });

  it('should return false for arrays with different lengths', () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 2];
    expect(areArraysEqual(array1, array2)).toBe(false);
  });

  it('should return false for arrays with different elements', () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 4, 3];
    expect(areArraysEqual(array1, array2)).toBe(false);
  });

  it('should return true for equal arrays in strict mode', () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 3];
    expect(areArraysEqual(array1, array2, true)).toBe(true);
  });

  it('should return false for arrays with different types in strict mode', () => {
    const array1 = [1, 2, 3];
    const array2 = [1, '2', 3];
    expect(areArraysEqual(array1, array2, true)).toBe(false);
  });

  it('should return false for arrays with different elements in strict mode', () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 4, 3];
    expect(areArraysEqual(array1, array2, true)).toBe(false);
  });

  it('should return true for equal arrays of objects', () => {
    const array1 = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];
    const array2 = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];
    const result = areArraysEqual(array1, array2);
    expect(result).toBe(true);
  });

  it('should return false for different arrays of objects', () => {
    const array1 = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];
    const array2 = [
      { id: 1, name: 'John' },
      { id: 3, name: 'Alice' },
    ];
    const result = areArraysEqual(array1, array2);
    expect(result).toBe(false);
  });
});
