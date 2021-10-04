import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  i: [],

  getLength() {
    return this.i.length;
  },
  addLink(value) {
    this.i.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position > this.i.length || position <= 0 || typeof position !== 'number') {
      this.i = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.i.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.i.reverse();
    return this;
  },
  finishChain() {
    let res = this.i.join('~~');
    this.i.splice(0, this.i.length)
    return res;
  }
};
