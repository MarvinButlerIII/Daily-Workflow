// Part 1: Separate Array Elements
const topSixRestaurants = ["Chick-fil-A", "In-N-Out", "Chipotle", "McDonald's", "Taco Bell", "KFC"];
const [first, second, third, ...remaining] = topSixRestaurants;

console.log(`first resturant: ${first}`);
console.log(`second resturant: ${second}`);
console.log(`third resturant: ${third}`);
console.log(`Remaining resturants: ${remaining}`); 
// first resturant: Chick-fil-A
// second resturant: In-N-Out
// third resturant: Chipotle
// Remaining resturants: McDonald's,Taco Bell,KFC

