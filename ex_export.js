// javascript export

// default & normal export

// const greet = function () {
//     console.log("hello world");
// }

// export default greet

// export const names = ['john', 'doe', 'jane doe']
// export const fakeData = {name: 'john', age: 0}

 const names = ['john', 'doe', 'jane doe']
 const fakeData = {name: 'john', age: 0}

export default function () {
    console.log("hello world");
}

export {
    names,
    fakeData
}