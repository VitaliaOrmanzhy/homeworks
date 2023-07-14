let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

//1
let positives = arr.filter(el => el > 0);
let sumOfPositives = positives.reduce((a, b) => a + b);
console.log('1:', sumOfPositives, positives.length);

//2
let min = arr.reduce((a, b) => Math.min(a, b));
let positionOfMin = arr.indexOf(min);
console.log('2:', min, positionOfMin);

//3
let max = arr.reduce((a, b) => Math.max(a, b));
let positionOfMax = arr.indexOf(max);
console.log('3:', max, positionOfMax);

//4
let negatives = arr.filter(el => el < 0);
console.log('4:', negatives.length);

//5
let oddPositives = positives.filter(el => el % 2 !== 0);
console.log('5:', oddPositives.length);

//6
let evenPositives = positives.filter(el => el % 2 === 0);
console.log('6:', evenPositives.length);

//7
let sumOfEvenPositives = evenPositives.reduce((a, b) => a + b);
console.log('7:', sumOfEvenPositives);

//8
let sumOfOddPositives = oddPositives.reduce((a, b) => a + b);
console.log('8:', sumOfOddPositives);

//9
let productOfPositives = positives.reduce((a, b) => a * b);
console.log('9:', productOfPositives);

//10
arr = arr.filter((el) => el === arr.reduce((a, b) => Math.max(a, b)));
console.log('10:', arr);

