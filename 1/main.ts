// In this list, the two entries that sum to 2020 are 1721 and 299. 
// Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.
// Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?

import * as input from "./start.json"
const data = input.data
const goal = 2020

// part 1
for (let index = 0; index < data.length; index++) {
  const temp = data.filter((num, i, arr) => {
    const difference = goal - num  
    const answer = arr.find(a => a === difference)
    if (answer) {
      console.log(num, answer, num * answer)
    }
  })
}
// answer is 1002 * 1018 = 1020036

// part 2
// In your expense report, what is the product of the three entries that sum to 2020?
for (let inner = 0; inner < data.length; inner++) {
  for (let middle = inner+1; middle < data.length; middle++) {
    for (let outer = middle+1; outer < data.length; outer++) {
      const dut = [
        data[inner],
        data[middle],
        data[outer],
      ]
     
      const sum = dut.reduce((p, acc)=> p + acc)
      if (sum === goal) {
        console.log(dut, dut.reduce((p, a) => p * a))
      }
    }
  }
}
// answer: [ 522, 855, 643 ] 286977330