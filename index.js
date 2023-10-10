// Object nd Array destructuring

const fakeName = ['john', 'doe', 'jane']

const [name1, name2, name3] = fakeName

// console.log(name1, name2, name3);

// Object destructuring
const fakedata = {user: "john", age: 0, height: 'unknown'}

const {user, age, height} = fakedata

console.log(user, age, height);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
