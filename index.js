// Spread Operator

const names = ["john", 'doe', 'jane']
const anotherNames = ["french", "english", "german"]

const addedArrs = [...names, ...anotherNames, "people"]

// console.log("addedArrs",  Array.isArray(addedArrs));
// console.log("addedArrs",  addedArrs);

// Object 
const fakedata = {name: "john", age: 89}

const anotherFakeData = {height: 45, worksAt: "Google"}

const addedObj = {...fakedata, ...anotherFakeData}

const anotherAddedObj = {...addedObj, age: 45}

console.log("addedObj", addedObj);
console.log("anotherAddedObj", anotherAddedObj);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax