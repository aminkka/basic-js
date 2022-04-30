const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    value !== undefined? this.array.push(`( ${value} )~~`) : this.array.push('( )');
    return this;
  },
  removeLink(position) {
    if(this.array[position - 1] === undefined || !Number.isInteger(position) || typeof position !== 'number') {
      this.array = [];
      throw new Error("You can't remove incorrect link!")
    } else {
      this.array.splice(position - 1, 1)
    }
    return this;
  },
  reverseChain() {
    this.array.reverse()
    return this;
  },
  finishChain() {
    let str = this.array.join('').slice(0, -2);
    this.array = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
