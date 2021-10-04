import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(m) {
  let count = 0;

  for (let arr of m) {

    for (let el of arr) {

      if (el === '^^') {

        count += 1;

      } else { count === 0 };
    }
  }

  return count;
}
