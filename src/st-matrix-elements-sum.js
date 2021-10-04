import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  const array = [];

  const i = array.concat(...matrix);

  let a = i.indexOf(0);
  while (a !== -1) {
    array.push(a);
    a = i.indexOf(0, a + 1);
  }

  for (let p = 0; p < array.length; p++) {
    i.splice(array[p] + matrix[0].length, 1, 0);
  }

  return i.reduce((u, b) => u + b);
}
