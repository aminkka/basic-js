const { NotImplementedError } = require('../extensions/index.js');

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
function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  let cloneArr = arr.slice();
  let transformedArr = [];
  
  for(let i = 0; i < cloneArr.length; i++){
    if(cloneArr[i] !== "--double-prev" && cloneArr[i] !== "--double-next" && cloneArr[i] !==  "--discard-next" && cloneArr[i] !==  "--discard-prev"){
      transformedArr.push(cloneArr[i])
    }
    if(cloneArr[i] === '--double-prev' && cloneArr[i-1] !== undefined){
       transformedArr.push(cloneArr[i-1])
    }
    if(cloneArr[i] === '--double-next'){
       transformedArr.push(cloneArr[i+1])
    }
    if(cloneArr[i] === '--discard-prev'){
      transformedArr.splice(i-1, 1)
    }
    if(cloneArr[i] === '--discard-next'){
       delete cloneArr[i+1]
    }
  }

  for(let i = 0; i < transformedArr.length; i++){
      if(transformedArr[i] === undefined){
        transformedArr.splice(i, 1)
      }
  }
    
  return transformedArr;
}

module.exports = {
  transform
};
