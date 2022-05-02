const { NotImplementedError } = require('../extensions/index.js');

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
function getDNSStats(domains) {
  let arrays = domains.map(elem => elem.split('.'));
  let set = new Set();
  for(let i = 0; i < arrays.length; i++){ 
      set.add(`.${arrays[i][arrays[i].length-1]}`)
      set.add(`.${arrays[i][arrays[i].length-1]}.${arrays[i][arrays[i].length-2]}`)
      set.add(`.${arrays[i][arrays[i].length-1]}.${arrays[i][arrays[i].length-2]}.${arrays[i][arrays[i].length-3]}`)
  } 
  let obj = {};
}

module.exports = {
  getDNSStats
};
