// fibonacci is summing the first number and the last number before
// sequence 1, 1, 2, 3, 5, 8, 13 etc

# A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1,

first = 1
second = 1
third = start + second // 2
fourth = second + third // 3
fifth = third + fourth // 5
sixth = fourth + fifth // 8

i need to sum two numbers, and store the value in a variable, but then loop this.

so a for loop can be used to how many times you want to run this sequence.

let f_seq_1 = 1
let f_seq_2 = 1

let new_answer = f_seq_1 + f_seq_2
consolg.log(new_answer)

new_answer = f_seq_2 + new_answer
consolg.log(new_answer)





const fibonacci = []

let n = 1

let sequence1 = n
let sequence2 = n

fibonacci.push(sequence1)
console.log(fibonacci)

fibonacci.push(sequence2)
console.log(fibonacci)

let sum = 0;

fibonacci.forEach( function (fibo) {
    sum += fibo
})

let count = 4

console.log(sum)

fibonacci.push(sum)

sequence2 = sum

console.log(sum)

// This is third iteration in array
console.log(fibonacci)

// in the array i want to sum the last two numbers, then push to array.
let total = 0
for (let i = ''; i < count; i++) {
    fibonacci.push(fibonacci[fibonacci.length -1] + fibonacci[fibonacci.length -2])
    console.log(fibonacci)
}
console.log(fibonacci[fibonacci.length -1])

// fibonacci.push(fibonacci[fibonacci.length -1] + fibonacci[fibonacci.length -2])

// console.log(fibonacci)

// fibonacci.push(fibonacci[fibonacci.length -1] + fibonacci[fibonacci.length -2])

// console.log(fibonacci)

// fibonacci.push(fibonacci[fibonacci.length -1] + fibonacci[fibonacci.length -2])

// console.log(fibonacci)
