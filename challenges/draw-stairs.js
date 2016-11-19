/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 + The staircase must climb up from left to right. The last line should only consist of asterisks,
 + without any leading/trailing spaces.
 + 
 + For example:     
 + drawStairs(6) ->          
 +     *
 +    **
 +   ***
 +  ****
 + *****
 +******
 +
 +*/
 
 function drawStairs(n) {
  let first = "";
  let result ='';

  for (let i = 1; i<=n; i++) {
    first += ' ';
}


let second = ''

for (let j = n-1; j>=0; j--){
	first = first.slice(0, j);
	second += '*';
	result = first + second;
	console.log(result)
}
 }
 
 
 module.exports = drawStairs;