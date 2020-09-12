const R = require('ramda');

const ASC = 'asc';
const DESC = 'desc';

const sortBy = {
  asc: {
    firstCondition: -1,
    secondCondition: 1
  },
  desc: {
    firstCondition: 1,
    secondCondition: -1
  }
}

/* Sort objects by the value of their key
 *
 * @param {Number[]|Object[]} arr - the array to retrieve the value from.
 * @param {String[]} [path=[]]
 * @param String command -
 * @return {Number[]|Object[]} the sorted array
 */
const sortOf = (arr, path = [], command = ASC) => {
  if (arr.length === 0) return [];

  command = (command.toLowerCase() === ASC) ? ASC : DESC;

  return arr.sort((a, b) => {
    const elem1 = R.pathOr(a, path, a);
    const elem2 = R.pathOr(b, path, b);

    if (elem1 < elem2) return sortBy[command].firstCondition;
    if (elem1 > elem2) return sortBy[command].secondCondition;

    return 0;
  });
}

module.exports = sortOf;
