import { testFunc } from '../src';

describe('index', () => {
  describe('testFunc', () => {
    it('should return a string containing Hello world', () => {
      const result = testFunc();

      expect(result).toMatch('Hello world');
    });
  });
});
