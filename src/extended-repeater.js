const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = typeof str === 'string'? str: String(str);
  let addition = options.addition === undefined ? '': String(options.addition);
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  let separator = options.separator ? options.separator : '+';
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';

  let add = addition.concat(additionSeparator);
  let repeatedAdd = add.repeat(additionRepeatTimes);
  let strWithSeparator = str.concat(repeatedAdd.slice(0, -additionSeparator.length).concat(separator));
  let newStr = strWithSeparator.repeat(repeatTimes).slice(0, -separator.length)
  return newStr;
}

module.exports = {
  repeater
};
