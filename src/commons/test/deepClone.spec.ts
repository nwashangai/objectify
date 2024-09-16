import { deepClone } from '../';

describe('deepClone', () => {
  it('should clone a simple object', () => {
    const obj = { a: 1 };
    const clone = deepClone(obj);
    expect(clone).toEqual(obj);
    expect(clone).not.toBe(obj);
  });

  it('should clone a nested object', () => {
    const obj = { a: { b: 1 } };
    const clone = deepClone(obj);
    expect(clone).toEqual(obj);
    expect(clone.a).not.toBe(obj.a);
  });

  it('should clone an array', () => {
    const arr = [1, 2, 3];
    const clone = deepClone(arr);
    expect(clone).toEqual(arr);
    expect(clone).not.toBe(arr);
  });

  it('should clone an object with arrays', () => {
    const obj = { a: [1, 2], b: 3 };
    const clone = deepClone(obj);
    expect(clone).toEqual(obj);
    expect(clone.a).not.toBe(obj.a);
  });
});
