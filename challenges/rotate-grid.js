/* You are given a NxN grid of elements represented by a 2D array. 
 * The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */
function rotateGrid(grid, n) {
  let result = [];
  let gridCount;
  let count = 0;
  if (n <= 0 || typeof n !== 'number') return [];
  for (let i = 0; i < n; i++) {
    result.push([]);
  }
  for (let j = result.length - 1; j >= 0; j -= 1) {
    gridCount = 0;
    while (gridCount < n) {
      result[count].push(grid[j][gridCount]);
      gridCount += 1;
    }
    count += 1;
  }
  return result;
}

module.exports = rotateGrid;