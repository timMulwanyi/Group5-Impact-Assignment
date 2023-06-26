function most (nums) {
  let majorityElement = 0
  let votes = 0

  for (i = 0; i < nums.length; i++) {
    if (votes == 0) {
      majorityElement = nums[i]
      votes++
    }
    else if (majorityElement == nums[i]) {
      votes++
    }
    else {
      votes--
    }
  }
  return majorityElement; 

}

let y = [3, 2, 3]

let f = most(y)

console.log(f);

