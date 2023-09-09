import nextElementInList from '@/utils/nextElementInList';
import { describe } from 'vitest';

describe('nextElementInList', () => {
  it('locates and returns the next element in the list', () => {
    const list = ["A", "B", "C", "D"];
    const value = "C";
    const result = nextElementInList(list, value);
    expect(result).toBe("D");
  });

  describe("when element is at the end of the list", () => {
    it('locates and returns the first element in the list', () => {
      const list = ["A", "B", "C", "D", "E"];
      const value = "E";
      const result = nextElementInList(list, value);
      expect(result).toBe("A");
    });
  });
});