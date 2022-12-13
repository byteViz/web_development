// Write a function to find the average value in an array of numbers

let tot = 0;
function avg(input) {
  for (num of input) {
    tot += num;
  }
  return tot / input.length;
}

// console.log(avg([0, 50])); //25

console.log(avg([75, 76, 80, 95, 100])); //85.2
