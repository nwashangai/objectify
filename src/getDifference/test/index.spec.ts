import { getDifference } from '../';

describe('getDifference', () => {
  it('should return differences from obj1 to obj2 when flag is 1', () => {
    const obj1 = { a: 1, b: 2, c: { d: 3, e: 5 } };
    const obj2 = { a: 1, b: 3, c: { d: 4, f: 6 } };
    const expected = { b: 2, c: { d: 3, e: 5 } };
    expect(getDifference(obj1, obj2, 1)).toEqual(expected);
  });

  it('should return differences from obj2 to obj1 when flag is -1', () => {
    const obj1 = { a: 1, b: 2, c: { d: 3 } };
    const obj2 = { a: 1, b: 3, c: { d: 4 } };
    const expected = { b: 3, c: { d: 4 } };
    expect(getDifference(obj1, obj2, -1)).toEqual(expected);
  });

  it('should handle for default flag', () => {
    const obj1 = { a: 1, b: 2, c: { d: 3 } };
    const obj2 = { a: 1, b: 3, c: { d: 4 } };
    const expected = { b: 2, c: { d: 3 } };
    expect(getDifference(obj1, obj2)).toEqual(expected);
  });

  it('should return combined differences when flag is 0', () => {
    const obj1 = { a: 1, b: 2, c: { d: 3 } };
    const obj2 = { a: 1, b: 3, c: { d: 4 } };
    const expected = null;
    expect(getDifference(obj1, obj2, 0)).toEqual(expected);
  });

  it('should return null if there are no differences', () => {
    const obj1 = { a: 1, b: 2, c: { d: 3 } };
    const obj2 = { a: 1, b: 2, c: { d: 3 } };
    expect(getDifference(obj1, obj2, 1)).toBeNull();
  });

  it('should handle nested objects correctly', () => {
    const obj1 = { a: 1, b: { c: 2, d: 3 } };
    const obj2 = { a: 1, b: { c: 2, d: 4 } };
    const expected = { b: { d: 3 } };
    expect(getDifference(obj1, obj2, 1)).toEqual(expected);
  });

  it('should handle empty objects', () => {
    const obj1 = {};
    const obj2 = { a: 1 };
    const expected = null;
    expect(getDifference(obj1, obj2, 1)).toBeNull();
  });

  it('should handle different data types', () => {
    const obj1 = { a: 1, b: 'string', c: true, d: null, e: undefined };
    const obj2 = { a: 2, b: 'different', c: false, d: null, e: undefined };
    const expected = { a: 1, b: 'string', c: true };
    expect(getDifference(obj1, obj2, 1)).toEqual(expected);
  });
});
