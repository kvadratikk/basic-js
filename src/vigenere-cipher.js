import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(dir = true) {
    this.reversed = !dir;
  }

  encrypt(str, key) {
    if (!str || !key) throw Error('Incorrect arguments!');

    let res = '';

    key = key.toUpperCase();
    str = str.toUpperCase();

    if (this.reversed) str = str.split('').reverse().join('');

    let j = 0;

    for (let i = 0; i < str.length; ++i) {
      if (!/[A-Z]/.test(str[i])) {
        res += str[i]
      } else {
        res += String.fromCharCode('A'.charCodeAt(0) + (str.charCodeAt(i) + key.charCodeAt(j % key.length) - 2 * 'A'.charCodeAt(0)) % 26);
        ++j;
      }
    }

    return res;
  }

  decrypt(str, key) {
    if (!str || !key) throw Error('Incorrect arguments!');

    let res = '';

    key = key.toUpperCase();
    str = str.toUpperCase();

    if (this.reversed) str = str.split('').reverse().join('');

    let j = 0;

    for (let i = 0; i < str.length; ++i) {
      if (!/[A-Z]/.test(str[i])) {
        res += str[i];
      } else {
        res += String.fromCharCode('A'.charCodeAt(0) + (26 + str.charCodeAt(i) - key.charCodeAt(j % key.length)) % 26);
        ++j;
      }
    }

    return res;
  }
}
