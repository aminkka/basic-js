const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arrNum = [];
  let arrLet = [];

  for(let i = 0; i < 10; i++){
    arrNum.push(i.toString())
  }

  let indA = 'A'.charCodeAt(0);
  let indF = 'F'.charCodeAt(0);
  for(let i = indA; i <= indF; i++){
    arrLet.push(String.fromCharCode(i))
  }

  let arr = [].concat(arrNum, arrLet)

  let arrMac48 = n.split('-').join('').split('')

  for(let i = 0; i < arrMac48.length; i++){
   if(!arr.includes(arrMac48[i])){
    return false
   } else {
    return true
  }
 }
}
module.exports = {
  isMAC48Address
};
