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
  const arrOneIdx = []

  const res = arr.filter((el, i) => {
    if (el === -1) arrOneIdx.push(i)

    return el !== -1
  }).sort((a, b) => a - b)

  arrOneIdx.forEach(el => res.splice(el, 0, -1))

  return res
}
