import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const arr = [];
  const res = {};

  domains.forEach(domain => {
    arr.push(domain.split('.'));
  });

  arr.forEach(item => {
    let str = '';

    for (let i = item.length - 1; i >= 0; i--) {
      str += '.' + item[i];

      if (!res.hasOwnProperty(str)) {
        res[str] = 1;
      } else {
        res[str] += 1;
      }
    }

    str = '';
  });

  return res;
}
