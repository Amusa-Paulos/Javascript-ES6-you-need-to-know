// Template literal
const testDiv = document.querySelector('#test')

const firstname = "John"
const lastName = "Doe"
const age = 54

// testDiv.innerHTML = firstname + " " + lastName + " is " + age + " years old"

testDiv.innerHTML = `${firstname} ${lastName} is ${age} years old`

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals