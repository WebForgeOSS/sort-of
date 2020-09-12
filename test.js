const R = require('ramda');
const groupValuesByKey = require('group-values-by-key');
const sortOf = require(".");

describe("sortOf tests", () => {
  test("if sortOf is called then it must be defined", () => {
    expect(typeof sortOf).toBe("function");
  });

  test("if array of numbers is passed then it can be sorted decreasingly", () => {
    const array = [1, 2, 3, 4, 5];

    const result = sortOf(array, [], 'desc');

    expect(R.equals(result, [5, 4, 3, 2, 1])).toBe(true);
  });

  test("if array of numbers is passed then it can be sorted increasingly", () => {
    const array = [5, 4, 3, 2, 1];

    const result = sortOf(array, [], 'asc');

    expect(R.equals(result, [1, 2, 3, 4, 5])).toBe(true);
  });

  test("if a sorted array of numbers is passed then the same array is returned #1", () => {
    const array = [1, 2, 3, 4, 5];

    const result = sortOf(array, [], 'asc');

    expect(R.equals(result, [1, 2, 3, 4, 5])).toBe(true);
  });

  test("if a sorted array of numbers is passed then the same array is returned #2", () => {
    const array = [5, 4, 3, 2, 1];

    const result = sortOf(array, [], 'desc');

    expect(R.equals(result, [5, 4, 3, 2, 1])).toBe(true);
  });

  test("if a sorted array of objects is passed then the array is sorted by the specified path", () => {
    const people = [
      {
        name: "alice",
        age: 15
      },
      {
        name: "bob",
        age: 9
      },
      {
        name: "aaron",
        age: 12
      },
    ]

    const result = groupValuesByKey(sortOf(people, ['age'], 'asc'));

    expect(R.equals(result.age, [9, 12, 15])).toBe(true);
  });
});
