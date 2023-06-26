function longestPrefix (array) {
  let sortedArray = array.sort()

  let firstString = sortedArray[0].split('')
  let lastString = sortedArray[array.length - 1].split('')

  let ans = ''

  for (i = 0; i < firstString.length; i++) {
    if (firstString[i] == lastString[i]) {
      ans += firstString[i]
    }
  }

  return ans

}

let m = ['aevbnm', 'aerty', 'aevbnmd']

let k = longestPrefix(m)

console.log(k);

