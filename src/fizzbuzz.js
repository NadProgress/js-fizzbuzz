// TODO: Write your function in this file
function numbers(low, up) {
  let array = []
  for (let i = low; i <= up; i++) {
    if (i % 15 === 0) {
      array.push('FizzBuzz')
    } else if (i % 5 === 0) {
      array.push('Buzz')
    } else if (i % 3 === 0) {
      array.push('Fizz')
    } else {
      array.push(i)
    }
  }
  return array
}
console.log(numbers(2, 20))
// TODO: Change undefined below to the name of your function
module.exports = numbers
