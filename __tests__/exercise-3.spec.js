const { deepStringSum } = require('../exercises/exercise-3');

describe('exercise 3', () => {
  const obj = {
    a: 'Hello',
    b: {
      c: 'Hey',
      d: 23,
      f: {
        g: 'A string',
        h: {
          i: 'Another string'
        }
      }
    },
    e: 34
  };

  it('result should be 30', () => {
    const result = deepStringSum(obj);

    expect(result).toBe(30);
  });
});
