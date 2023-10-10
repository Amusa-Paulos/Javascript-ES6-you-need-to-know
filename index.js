// Set

const namesArr = ["john", "jane", "doe", "john"]

const removedDuplicates = new Set(namesArr)

console.log(removedDuplicates); // ["john", "jane", "doe"]
console.log(removedDuplicates.size); // ["john", "jane", "doe"]

removedDuplicates.add(89)

console.log(removedDuplicates); // ["john", "jane", "doe", 89]
console.log(removedDuplicates.has("john")); // ["john", "jane", "doe", 89]

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set