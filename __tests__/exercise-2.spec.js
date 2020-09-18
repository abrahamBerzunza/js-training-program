const { average } = require('../exercises/execise-2');

describe('activity 2', () => {
  it('the result should be 3.5', () => {
    const averageOf = average();
    averageOf(2);
    averageOf(3);
    averageOf(4);
    const result = averageOf(5);
    expect(result).toBe(3.5);
  });

  it('the result should be 4', () => {
    const averageOf = average();
    averageOf(3);
    averageOf(3);
    const result = averageOf(6);
    expect(result).toBe(4);
  });

  it('the result should be 5', () => {
    const averageOf = average();
    averageOf(2);
    averageOf(4);
    averageOf(6);
    const result = averageOf(8);
    expect(result).toBe(5);
  });
});
