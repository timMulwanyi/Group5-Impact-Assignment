function twoSum (nums, target) {
  let newOutPut;
  for (i = 0; i < nums.length; i++) {
    let firstIndex = nums.indexOf(nums[i])
    for (j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        newOutPut = [firstIndex, j]
      }
    }
  }
  return newOutPut;
}

let array = [3, 2, 4]
let targ = 6
let o = twoSum(array, targ)
console.log(o);

