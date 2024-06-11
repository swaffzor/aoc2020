import * as input from "./input.json"

/*

..##.........##.........##.........##.........##.........##.......  --->
#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..
.#....#..#..#....#..#..#....#..#..#....#..#..#....#..#..#....#..#.
..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#
.#...##..#..#...##..#..#...##..#..#...##..#..#...##..#..#...##..#.
..#.##.......#.##.......#.##.......#.##.......#.##.......#.##.....  --->
.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#
.#........#.#........#.#........#.#........#.#........#.#........#
#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...
#...##....##...##....##...##....##...##....##...##....##...##....#
.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#  --->

You start on the open square (.) in the top-left corner and need to reach the bottom 
(below the bottom-most row on your map).

The toboggan can only follow a few specific slopes (you opted for a cheaper model that 
prefers rational numbers); start by counting all the trees you would encounter for the 
slope right 3, down 1:

From your starting position at the top-left, check the position that is right 3 and down 1. 
Then, check the position that is right 3 and down 1 from there, and so on until you go past 
the bottom of the map.

The locations you'd check in the above example are marked here with O where there was an open 
square and X where there was a tree:

..##.........##.........##.........##.........##.........##.......  --->
#..O#...#..#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..
.#....X..#..#....#..#..#....#..#..#....#..#..#....#..#..#....#..#.
..#.#...#O#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#
.#...##..#..X...##..#..#...##..#..#...##..#..#...##..#..#...##..#.
..#.##.......#.X#.......#.##.......#.##.......#.##.......#.##.....  --->
.#.#.#....#.#.#.#.O..#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#
.#........#.#........X.#........#.#........#.#........#.#........#
#.##...#...#.##...#...#.X#...#...#.##...#...#.##...#...#.##...#...
#...##....##...##....##...#X....##...##....##...##....##...##....#
.#..#...#.#.#..#...#.#.#..#...X.#.#..#...#.#.#..#...#.#.#..#...#.#  --->

In this example, traversing the map using this slope would cause you to encounter 7 trees.

Starting at the top-left corner of your map and following a slope of right 3 and down 1, how many 
trees would you encounter?
*/

const run = 3
const rise = 1
const tree = '#'
let count = 0
let xPos = 0
const clear = (arr: string[]) => arr.map(s => '_')
let mutation = clear(input)
for (let i = 0; i < input.length; i+= rise) {
  if (i < 10){
    console.log(mutation.join(''))
    console.log(input[i])
    console.log('')
    mutation = clear(mutation)
  }
  const spots = input[i].split('');
  // mutation = spots
  if (spots[xPos] === tree) {
    count++; 
    mutation[xPos] = 'X'
  } else {
    mutation[xPos] = 'O'
  }
  // console.log(spots.splice(xPos, 1, 'H').join())
  if (xPos + run > spots.length) {
    xPos = spots.length % (xPos + run)
  }
  xPos+= run
}
console.log(count)
