import { merge, deepClone, deepCloneReplace } from '..';

describe('deepCloneReplace', () => {
  describe('merge', () => {
    it('should merge two simple objects', () => {
      const target = { a: 1 };
      const source = { b: 2 };
      merge(target, source);
      expect(target).toEqual({ a: 1, b: 2 });
    });

    it('should merge nested objects', () => {
      const target = { a: { b: 1 } };
      const source = { a: { c: 2 } };
      merge(target, source);
      expect(target).toEqual({ a: { b: 1, c: 2 } });
    });

    it('should merge when the source has arrays', () => {
      const target = { a: 1 };
      const source = { b: [2, 3] };
      merge(target, source);
      expect(target).toEqual({ a: 1, b: [2, 3] });
    });

    it('should merge when the target has arrays', () => {
      const target = { a: [1, 2] };
      const source = { b: 3 };
      merge(target, source);
      expect(target).toEqual({ a: [1, 2], b: 3 });
    });

    it('should initialize target key as an empty array if source key is an array', () => {
      const target: { [key: string]: number[] } = {};
      const source = { a: [1, 2, 3] };
      merge(target, source);
      expect(Array.isArray(target['a'])).toBe(true);
      expect(target['a']).toEqual([1, 2, 3]);
    });

    it('should initialize target key as an empty object if source key is an object', () => {
      const target: { [key: string]: number[] } = {};
      const source = { a: { b: 1 } };
      merge(target, source);
      expect(typeof target['a']).toBe('object');
      expect(target['a']).toEqual({ b: 1 });
    });
  });

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

  describe('deepCloneReplace', () => {
    it('should clone exactly same object', () => {
      const obj = { a: 1 };
      const result = deepCloneReplace(obj);
      expect(result).toEqual({ a: 1 });
    });

    it('should replace a key in a simple object', () => {
      const obj = { a: 1 };
      const extraObj = { a: 2 };
      const result = deepCloneReplace(obj, extraObj);
      expect(result).toEqual({ a: 2 });
    });

    it('should replace a key in a nested object', () => {
      const obj = { a: { b: 1 } };
      const extraObj = { a: { b: 2 } };
      const result = deepCloneReplace(obj, extraObj);
      expect(result).toEqual({ a: { b: 2 } });
    });

    it('should add a new key to an object', () => {
      const obj = { a: 1 };
      const extraObj = { b: 2 };
      const result = deepCloneReplace(obj, extraObj);
      expect(result).toEqual({ a: 1, b: 2 });
    });

    it('should replace a key in an object with arrays', () => {
      const obj = { a: [1, 2], b: 3 };
      const extraObj = { a: [3, 4] };
      const result = deepCloneReplace(obj, extraObj);
      expect(result).toEqual({ a: [3, 4], b: 3 });
    });
  });
});
