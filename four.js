function firstPalindrome (words) {
  let ans;
  for (i = 0; i < words.length; i++) {
    let normalString = words[i]
    let reversedString = normalString.split('').reverse().join('')
    if (normalString == reversedString) {
      ans = normalString
      return ans
    }
  }
  return ans;
}

let t = ['racecar', 'rar', 'ada', 'drive']

let r = firstPalindrome(t)
console.log(r);

