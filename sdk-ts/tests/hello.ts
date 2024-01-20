if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe('zklogin session', () => {
    it('zklogin address', () => {
      expect(1).toBe(1)
    });
  });
}