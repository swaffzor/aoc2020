import * as input from "./input.json"

/* PART 1

1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
Each line gives the password policy and then the password. The password policy indicates the 
lowest and highest number of times a given letter must appear for the password to be valid. 
For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.

In the above example, 2 passwords are valid. The middle password, cdefg, is not; 
it contains no instances of b, but needs at least 1. The first and third passwords are valid: 
they contain one a or nine c, both within the limits of their respective policies.

How many passwords are valid according to their policies?
*/
const part1Result = input.filter(entry => {
  const occurences = entry.policy.split(entry.target).length - 1
  // console.log(entry, " => ", occurences)
  return entry.min <= occurences && occurences <= entry.max
})
console.log("part 1: ", part1Result.length, "/", input.length)

/* PART 2

Each policy actually describes two positions in the password, where 1 means the first character, 
2 means the second character, and so on. (Be careful; Toboggan Corporate Policies have no concept of "index zero"!) 
Exactly one of these positions must contain the given letter. Other occurrences of the letter are 
irrelevant for the purposes of policy enforcement.
Given the same example list from above:

1-3 a: abcde is valid: position 1 contains a and position 3 does not.
1-3 b: cdefg is invalid: neither position 1 nor position 3 contains b.
2-9 c: ccccccccc is invalid: both position 2 and position 9 contain c.
How many passwords are valid according to the new interpretation of the policies?
*/

const part2Result = input.filter(entry => {
  const pw = entry.policy.split('')
  // console.log(entry, " => ", pw)
  let count = 0
  if (entry.min-1 < pw.length && pw[entry.min-1] === entry.target) count++
  if (entry.max-1 < pw.length && pw[entry.max-1] === entry.target) count++
  return count === 1 
})
console.log("part 2: ", part2Result.length, "/", input.length)