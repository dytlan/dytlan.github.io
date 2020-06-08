const numbers = [ 1,10,2,0,7,4,91,100,2];

const filter = numbers.filter(number => number % 2 !== 0);

console.log(filter);

// const map = numbers.map (number => number * 2 - 1);

// console.log(map);

// const reduce = numbers.reduce((accumulator,currentValue) => accumulator+currentValue)

// console.log(reduce);

const chain = numbers.filter(number => number % 2 !== 0).map(number => number * 2).reduce((accumulator,currentValue)=>accumulator+currentValue);

console.log(chain);