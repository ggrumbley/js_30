import { validAnagram } from '.';

describe('String questions', () => {
  describe('anagram method', () => {
    it('handles empty string', () => {
      expect(validAnagram('', '')).toBe(true);
    });

    it('handles "aaz"', () => {
      expect(validAnagram('aaz', 'zza')).toBe(false);
    });

    it('handles "anagram"', () => {
      expect(validAnagram('anagram', 'nagaram')).toBe(true);
    });

    it('handles "rat"', () => {
      expect(validAnagram('rat', 'car')).toBe(false);
    });
  });
});

