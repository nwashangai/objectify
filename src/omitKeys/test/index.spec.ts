import { omitKeys } from '../'; // Adjust the import path accordingly

describe('omitKeys', () => {
  it('should omit specified keys from a nested object', () => {
    const obj = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
          f: 4,
        },
      },
      g: 5,
    };

    const keysToOmit = ['b.c', 'b.d.f'];
    const result = omitKeys(obj, keysToOmit);

    expect(result).toEqual({
      a: 1,
      b: {
        d: {
          e: 3,
        },
      },
      g: 5,
    });
  });

  it('should return the original object if keysToOmit is empty', () => {
    const obj = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
          f: 4,
        },
      },
      g: 5,
    };

    const keysToOmit: string[] = [];
    const result = omitKeys(obj, keysToOmit);

    expect(result).toEqual(obj);
  });

  it('should return the original object if no matching keys are found', () => {
    const obj = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
          f: 4,
        },
      },
      g: 5,
    };

    const keysToOmit = ['x.y', 'z'];
    const result = omitKeys(obj, keysToOmit);

    expect(result).toEqual(obj);
  });

  it('should not mutate the original object', () => {
    const obj = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
          f: 4,
        },
      },
      g: 5,
    };

    const keysToOmit = ['b.c', 'b.d.f'];
    const originalCopy = JSON.parse(JSON.stringify(obj));
    omitKeys(obj, keysToOmit);

    expect(obj).toEqual(originalCopy);
  });

  it('should handle non-object values gracefully', () => {
    expect(omitKeys(42 as any, ['a'])).toBe(42);
    expect(omitKeys('string' as any, ['a'])).toBe('string');
    expect(omitKeys(true as any, ['a'])).toBe(true);
  });

  it('should handle arrays correctly', () => {
    const obj = [1, 2, 3];

    const keysToOmit = ['2'];
    const result = omitKeys(obj, keysToOmit);

    expect(result).toEqual([1, 2]);
  });

  it('should handle arrays that includes object correctly', () => {
    const obj = {
      a: 1,
      b: [1, 2, { c: 3, d: 4 }],
    };

    const keysToOmit = ['b.2.c'];
    const result = omitKeys(obj, keysToOmit);

    expect(result).toEqual({
      a: 1,
      b: [1, 2, { d: 4 }],
    });
  });
});
