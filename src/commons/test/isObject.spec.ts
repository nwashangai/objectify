import { isObject } from '..';

describe('isObject', () => {
  it('should return true for an object', () => {
    const obj = { a: 1 };
    expect(isObject(obj)).toBe(true);
  });

  it('should return false for null', () => {
    const obj = null;
    expect(isObject(obj)).toBe(false);
  });

  it('should return false for a string', () => {
    const obj = 'test';
    expect(isObject(obj)).toBe(false);
  });

  it('should return false for a number', () => {
    const obj = 123;
    expect(isObject(obj)).toBe(false);
  });

  it('should return false for an array', () => {
    const obj = [1, 2, 3];
    expect(isObject(obj)).toBe(false);
  });

  it('should return false for a boolean', () => {
    const obj = true;
    expect(isObject(obj)).toBe(false);
  });
});
