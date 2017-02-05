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

function factorial(num) {

  if (num === 0) {
    return 1;
  }

  let product = 1;

  for (let i = num; i > 0; i -= 1) {
    //console.log('num:', num);
    product *= i;
  }
  return product;
}

function calculateNum(n, r) {
  return Math.floor((factorial(n))/((factorial(r) * factorial(n - r))));
}

// function pascalTriangle(numRows) {

//   const pascalsArr = [];
//   let newArr;
//   //let newNum;

//   for (let i = 0; i < numRows; i += 1) {
    
//     newArr = [];

//     for (let j = 0; j <= i; j += 1) {

//       newArr.push(calculateNum(i, j));
//     }
//     pascalsArr.push(newArr);
//   }
  
//   return pascalsArr;
// }

function pascalTriangle(numRows) {

  const pascalsArr = [];
  let newArr;
  //let newNum;

  for (let i = 0; i < numRows; i += 1) {
    
    newArr = [];
    
    if (i === 0) {
      newArr.push(1);
      pascalsArr.push(newArr);
      continue;
    }

    for (let j = 0; j <= i; j += 1) {
      let left;
      if (j - 1 < 0) {
        left = 0;
      } else {
        left = pascalsArr[i - 1][j - 1];
      }
        
      if (j + 1 > i) {
        right = 0;
      } else {
        right = pascalsArr[i - 1][j];
      }
      //console.log('calculate num:', calculateNum(i,j));

      //newArr.push(calculateNum(i, j));
      newArr.push(left + right);
    }
    pascalsArr.push(newArr);
  }
  
  return pascalsArr;
}


module.exports = pascalTriangle;
