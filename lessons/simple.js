const sum = (a, b) => a + b
const subtract = (a, b) => a - b

let result = sum(3, 7)
let expected = 10

if (expected !== result) {
    throw new Error(`${result} is not equal to ${expected}`)
}

result = subtract(3, 7)
expected = -4

if (expected !== result) {
    throw new Error(`${result} is not equal to ${expected}`)
}