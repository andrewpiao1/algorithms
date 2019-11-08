// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:
  // Input: nums = [1,1,1,2,2,3], k = 2
  // Output: [1,2]

// Example 2:
  // Input: nums = [1], k = 1
  // Output: [1]

//You may assume k is always valid, 1 ≤ k ≤ number of unique elements.

const topKFrequent = function(nums, k){
  let obj = {};
  for (let key of nums){
    obj[key] = obj[key]+1 || 1   // 1.
  }

  let res = Object.entries(obj).sort((a,b)=>b[1]-a[1]) // 2.
                .slice(0,k)
                .map(e=>e[0])

  return res;
}

//1: cleaner way to object map
//2: for sorting by an additional sub-category, CHAIN the subcategory sort first, then main sort


let output = topKFrequent([1,1,1,5,5,2,2,3,4,4], 2)
console.log('output: ', output)