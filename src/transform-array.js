import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  if (arr.indexOf('--discard-next') === -1 && arr.indexOf('--discard-prev') === -1 && arr.indexOf('--double-prev') === -1 && arr.indexOf('--double-next') === -1) {
    return arr
  }

  let newArr = [...arr]

  if (arr.indexOf('--discard-next') != -1 && arr.indexOf('--double-prev') != -1) {
    newArr.splice(newArr.indexOf('--discard-next'), 2)
    newArr.splice(newArr.indexOf('--double-prev'), 1)
    return newArr
  }

  if (arr.indexOf('--discard-next') != -1 && arr.indexOf('--discard-prev') != -1) {
    newArr.splice(newArr.indexOf('--discard-next'), 2)
    newArr.splice(newArr.indexOf('--discard-prev'), 1)
    return newArr
  }

  if (arr.indexOf('--double-next') != -1) {
    if (arr.length - 1 <= arr.indexOf('--double-next')) {
      newArr.splice(arr.indexOf('--double-next'), 1)
      return newArr
    }
    newArr.splice(newArr.indexOf('--double-next'), 1, newArr[newArr.indexOf('--double-next') + 1])
  }

  if (arr.indexOf('--double-prev') != -1) {
    if (arr.indexOf('--double-prev') === 0) {
      newArr.splice(0, 1)
      return newArr
    }
    newArr.splice(newArr.indexOf('--double-prev'), 1, newArr[newArr.indexOf('--double-prev') - 1])
  }

  if (arr.indexOf('--discard-next') != -1) {
    if (arr.length - 1 <= arr.indexOf('--discard-next')) {
      newArr.splice(arr.indexOf('--discard-next'), 1)
      return newArr
    }
    newArr.splice(newArr.indexOf('--discard-next'), 2)
  }

  if (arr.indexOf('--discard-prev') != -1) {
    if (arr.indexOf('--discard-prev') === 0) {
      newArr.splice(0, 1)
      return newArr
    }
    newArr.splice(newArr.indexOf('--discard-prev') - 1, 2)
  }

  return newArr
}
