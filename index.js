// Arrow function

// function greet() {
//     console.log('hellow world')
// }

// const greet = () => {
//     console.log('hello world'); // hello world
// }

// document.addEventListener('click', (ev) => {

// })

// const greet = (name="Paulos") => {
//     console.log("Hello " + name)
// }

// greet() // Hello Paulos
// greet("John Doe") // Hello John Doe

// Rest (...)

const userData = (name, ...others) => {
    console.log(name, others);
}

userData("John")
userData("John", "doe", 45, 60, "100 children")

// Arrow function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// Rest operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters