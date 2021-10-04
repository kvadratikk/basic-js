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
  let res = 0;

  const s11 = s1.split('').sort();
  const s22 = s2.split('').sort();

  const res1 = s11.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});

  const res2 = s22.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});

  const arr1 = Object.keys(res1);
  const arr2 = Object.keys(res2);

  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
      return Math.min(s11.length, s22.length);
    }

    if (arr1.indexOf(arr2[i]) !== -1 || arr2.indexOf(arr1[i]) !== -1) {
      res += 1;
    }
  }

  return res;
}
