function fizzBuzz (str1, str2) {
  if ((str1.length + str2.length) % 3 == 0 && (str1.length + str2.length) % 5 == 0){
    return 'FizzBuzz'; 
  }
  else if ((str1.length + str2.length) % 3 == 0) {
    return 'Fizz'; 
  }
  else if ((str1.length + str2.length) % 5 == 0) {
    return 'Buzz'; 
  }
  else {
    return 'The total length is not divisible by any'; 
  }
}

let y = 'moses'
let x = 'kamir'
let m = fizzBuzz(y, x)
console.log(m);

