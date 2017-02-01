/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows, containerArray = [[1]]) {
  if(numRows === 1) return containerArray;
  if(containerArray[0] === undefined) containerArray = [[1]]
  let firstInt;
  let secondInt;
  let lastArr = containerArray[containerArray.length - 1]
  let populatedArr = [];
  for(let i = 0; i < lastArr.length; i++){
    firstInt = i;
    secondInt = i + 1;
    if(i === 0) populatedArr.push(1);
    if(i === lastArr.length - 1) populatedArr.push(1);
    else{
      populatedArr.push(lastArr[firstInt] + lastArr[secondInt])
    }
  }
  containerArray.push(populatedArr)
  return pascalTriangle(--numRows, containerArray)
}

module.exports = pascalTriangle;