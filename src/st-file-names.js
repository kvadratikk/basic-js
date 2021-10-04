import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  if (names === []) {
    return [];
  }

  const arr = [];

  names.forEach(item => {
    if (arr.indexOf(item) === -1) {
      arr.push(item);
    } else {
      let k = arr[arr.indexOf(item)];
      let count = 0;

      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === k) {
          count++;
        }
      }

      if (arr.indexOf(`${item}(${count})`) !== -1) {
        arr.push(`${item}(${++count})`);
      } else {
        arr.push(`${item}(${count})`);
      }
    }
  });

  return arr;
}
