import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let res = '';

  for (let i = 0; i < str.length; i++) {
    const value = str[i];
    let count = 1;

    for (i; str[i + 1] === value; i++) {
      count += 1;
    }

    if (str.length === 1) {
      res += str;
    } else if (count === 1) {
      res += String(value);
    } else {
      res += String(count + value);
    }
  }

  return res;
}
