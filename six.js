function addDigits (num) {
  while (num > 9) {
    num = Array.from(String(num), Number).reduce((a, b) => a + b);
  }
      
  return num;

}


let r = 38 

let e = addDigits(r)

console.log(e);

