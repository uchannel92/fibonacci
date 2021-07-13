let count = 8
const err_msg = 'OOPS'
let x = 0
let y = 1
let arr = []
let sum = 0
arr.push(x, y)

if (count < 0) {
    console.log(err_msg)
} else {
    fibonacci()
}

function fibonacci() {

    while (arr.length <= parseInt(count)) {
        sum = x + y
        arr.push(sum)
        x = y
        y = sum
    }
    return sum 
        
}

console.log(sum)
console.log(arr)