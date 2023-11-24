console.log(3 + + '3')  // 6
console.log(1 + "1")  // "11
console.log(1 - "1")  // 0
console.log(0.1 + 0.2)  // 0.3000000000004
console.log(0.1 + 0.2 == 0.3) // false

// IIFE
(function firstA(a){
return (function secondB(b){
console.log(a);
})(1)
})(0);
// consoles 0

const objA = {
city_name: "Delhi"
}
const objB = {
city_name: "Delhi"
}
console.log(objA == objB) // false, as this is comparing the object reference not their values

// Event loop
const promise1 = new Promise((resolve,reject)=> {
setTimeout(()=>{
resolve("Yes!")
}, 1000)
reject(Error("No! 1"))
})

console.log("hello")
setTimeout(()=>{
console.log("Timeout 1")
}, 0)
console.log("hello 1")
promise1.catch((err)=> {
console.log(err.message)
})
console.log("hello 2")

Output:
"hello"
"hello 1"
"hello 2"
"No! 1"
"Timeout 1"
