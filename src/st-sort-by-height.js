import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  const array = [];
  let idx = arr.indexOf(-1);
  for (let i = 0; idx !== -1; i++) {
    array.push(idx);
    idx = arr.indexOf(-1, idx + 1);
  }
  const newArr = arr.filter((item) => item !== -1).sort((a, b) => a - b);
  for (let j = 0; j < array.length; j++) {
    newArr.splice(array[j], 0, -1);
  }
  return newArr;
}
