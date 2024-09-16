import { findAndPop } from '../';

describe('findAndPop', () => {
  it('should remove and return the element from the array if found', () => {
    const arr = [1, 2, 3, 4, 5];
    const element = 3;
    const result = findAndPop(arr, element);
    expect(result).toBe(3);
    expect(arr).toEqual([1, 2, 4, 5]);
  });

  it('should return null if the element is not found in the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const element = 6;
    const result = findAndPop(arr, element);
    expect(result).toBeNull();
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle objects as elements', () => {
    const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const element = { id: 2 };
    const result = findAndPop(arr, element);
    expect(result).toEqual({ id: 2 });
    expect(arr).toEqual([{ id: 1 }, { id: 3 }]);
  });

  it('should handle deep nested objects as elements', () => {
    const arr = [
      { id: 1, nested: { value: 10 } },
      { id: 2, nested: { value: 20 } },
      { id: 3, nested: { value: 30 } },
    ];
    const element = { id: 2, nested: { value: 20 } };
    const result = findAndPop(arr, element);
    expect(result).toEqual({ id: 2, nested: { value: 20 } });
    expect(arr).toEqual([
      { id: 1, nested: { value: 10 } },
      { id: 3, nested: { value: 30 } },
    ]);
  });
});
