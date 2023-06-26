function duplicate (arr) {
  
  let sortedArray = arr.sort()

  for (i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] == sortedArray[i + 1]){
      return true 
    }
  }

  return false

}

let y = [4, 3, 4] // [3, 4]

let d = duplicate(y)

console.log(d);

