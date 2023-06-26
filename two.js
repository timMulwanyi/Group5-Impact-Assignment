
function ageCheck () {
  let userYear = prompt('Please Enter Your Year of Birth: ')
  let currentYear = new Date().getFullYear()
  let userAge = currentYear - userYear

  if (userAge != null) {
    if (userAge < 18) {
      return 'User is still a minor';
    }
    else if (18 <= userAge <= 36) {
      return 'User is a youth';
    }
    else {
      return 'User is an elder';
    }
  }
}

let age = ageCheck()
console.log(age);

