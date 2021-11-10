import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('')
  const arr2 = s2.split('')

  let common = 0

  for (let el of arr2) {
    if (arr1.includes(el)) {
      arr1.splice(arr1.indexOf(el), 1)
      common += 1
    }
  }

  return common
}
