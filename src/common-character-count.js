const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let set = new Set ();
  let arr = (s1 + s2).split('');
  arr.forEach(elem => set.add(elem));
  let result = 0;
  for(let i = 0; i < set.size; i++){
    if (s1.split('').filter(elem => elem === Array.from(set)[i]).length >=
        s2.split('').filter(elem => elem === Array.from(set)[i]).length) {
          result += s2.split('').filter(elem => elem === Array.from(set)[i]).length
        }  else {
          result += s1.split('').filter(elem => elem === Array.from(set)[i]).length
        }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
