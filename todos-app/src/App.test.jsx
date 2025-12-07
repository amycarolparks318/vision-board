import { describe, it, expect } from 'vitest';

describe('something truthy and falsy', () => {
  it('tests true to be true', () => {
    expect(true).toBe(true);
  });
  it('tests false to be false', () => {
    expect(false).toBe(false);
  });
});

