import { isPrimitive } from '../';

describe('isPrimitive', () => {
  it('should return true for null', () => {
    expect(isPrimitive(null)).toBe(true);
  });

  it('should return true for boolean values', () => {
    expect(isPrimitive(true)).toBe(true);
    expect(isPrimitive(false)).toBe(true);
  });

  it('should return true for number values', () => {
    expect(isPrimitive(0)).toBe(true);
    expect(isPrimitive(1)).toBe(true);
    expect(isPrimitive(-1)).toBe(true);
    expect(isPrimitive(3.14)).toBe(true);
  });

  it('should return true for string values', () => {
    expect(isPrimitive('')).toBe(true);
    expect(isPrimitive('hello')).toBe(true);
  });

  it('should return true for symbol values', () => {
    const symbol = Symbol();
    expect(isPrimitive(symbol)).toBe(true);
  });

  it('should return true for undefined', () => {
    expect(isPrimitive(undefined)).toBe(true);
  });

  it('should return true for bigint values', () => {
    const bigint = BigInt(123);
    expect(isPrimitive(bigint)).toBe(true);
  });

  it('should return false for non-primitive values', () => {
    expect(isPrimitive({})).toBe(false);
    expect(isPrimitive([])).toBe(false);
    expect(
      isPrimitive(() => {
        return null;
      })
    ).toBe(false);
  });
});
