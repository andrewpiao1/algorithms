// var oddCells = function(n, m, indicies){

//   let matrix = [];
//   let count = n
//   while (count>0){
//     matrix.push(new Array(m).fill(0))
//     count--;
//   }

//   for (let index of indicies){
//     let col = index[1]
//     let row = index[0]

//     //increment rows
//     matrix[row] = matrix[row].map(e=>e+1)

//     //increment cols
//     row = 0;
//     while (row<n){
//       matrix[row][col]++
//       row++
//     }
//   }

//   let oddCount = 0;
//   for (let row of matrix){
//     for (let elm of row){
//       if (elm%2===1) oddCount++;
//     }
//   }

//   return oddCount;
// }

// === Optimized ===

var oddCells = function(n, m, indicies){

  let matrix = [];
  let count = n
  while (count>0){
    matrix.push(new Array(m).fill(0)) //how to create an Array of "m" length
    count--;
  }

  for (let index of indicies){
    let col = index[1]
    let row = index[0]

    //increment rows
    matrix[row] = matrix[row].map(e=>e+1)

    //increment cols
    for (let row of matrix){   //1. cleaner way to increment col indices
      row[col]++
    }
  }

  let oddCount = 0;
  let matrixSpread = [];
  for (let row of matrix){   //2. searching through single matrix may be faster?
    matrixSpread = matrixSpread.concat(row)
  }
  matrixSpread.forEach(elm => {
    if (elm%2 ===1) oddCount++;
  })

  return oddCount
}


console.log(oddCells(2,3, [[0,1], [1,1]]))