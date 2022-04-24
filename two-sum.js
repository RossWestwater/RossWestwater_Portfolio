/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// const nums = [2,7,11,15]
// const target = 9

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let ix = i + 1; ix < nums.length; ix++) {
        if ( nums[ix] + nums[i] === target) {
          return [i, ix ]
        }
      }
    }
};

twoSum([2,5,5,11], 10)

var twoSum = function(nums, target) {
  const comp = {};
  for(let i=0; i<nums.length; i++){
    if(comp[nums[i] ]>=0){
      return [ comp[nums[i] ] , i]
    }
    comp[target-nums[i]] = i
    console.log(comp[nums[i] ]);
  }
};

twoSum([2,5,11,3,6,5], 10)