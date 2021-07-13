let array = []

let count = 5
let sum = 0

let start = 0
let next = 1


while (array.length < count) {
    array.push(start, next)

    let update = array.forEach( function (fibo) {
        sum = fibo + fibo   
    })

    array.push(sum)

    console.log(array)

    array.push(array.length -1 + array.length -2)

    console.log(array)

    console.log(array.length)

}




// so the next number in the sequence is the TOTAL of the previous two numbers.

// add the numbers to the array -- sum the numbers, then push that sum to the array?
// then add the next two numbers, sum the numbers then push to the array?