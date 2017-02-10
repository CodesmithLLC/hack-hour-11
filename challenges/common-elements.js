// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function removeDupes(arr) {
  return arr.filter((element, index, array) => {
    return !array.slice(0, index).includes(element);
  });
}

function commonElements(...args){
  const obj = {};

  args.forEach((array, index) => {
    array.forEach(e => {
      obj[e] = obj[e] ? obj[e].concat(index) : obj[e] = [index];
      obj[e] = removeDupes(obj[e]);
    });
  });

  return Object.keys(obj).filter(e => obj[e].length === 4).map(e => parseInt(e) || e);
}

const array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
const array2  = [1, 15,9,9,'ferret',9,26,12,12,'dog'];
const array3 = [1, 23,12,12,77,'ferret',9,88,100,'dog'];
const array4 = [1, 'ferret',12,12,45,9,66,77,78,2000, 'dog'];

console.log(commonElements(array1, array2, array3, array4));

module.exports = commonElements;
