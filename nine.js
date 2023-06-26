function findSingleElement(nums) {
  let obj = {} 
  
  for (let i of nums) {
    if (!obj[i]) {
      obj[i] = 1
    }
    else {
      obj[i]++
    }
  }

  for (let j in obj) {
    if (obj[j] == 1){
      return obj[j]
    }
  }

}

let p = [2, 2, 1]

let r = findSingleElement(p)
console.log(r);

