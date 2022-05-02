const { NotImplementedError } = require('../extensions/index.js');

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
function encodeLine(str) {
  let arr = str.split('');
  let arrOfSet = Array.from(new Set(arr));
  let encoderArr = [];
  for (elem of arrOfSet){
    let filt = arr.filter(item => item === elem)
    if(filt.length === 1) {
    encoderArr.push(filt[0])
    } else{
    encoderArr.push(`${filt.length}${filt[0]}`)
    }
  }
  return encoderArr.join('');
}

module.exports = {
  encodeLine
};
