const {sum, subtract} = require('../math')

function sumTest() {
    const result = sum(3, 7)
    const expected = 10
    expect(result).toBe(expected)
}
test('sum adds numbers', sumTest)

function substractTest() {
    const result = subtract(3, 7)
    const expected = -4
    expect(result).toBe(expected)
}

test('subtract subtracts numbers', substractTest)

function test(title, callback) {
    try {
        callback()
        console.log(`✓ ${title}`)
    } catch (error) {
        console.error(`✕ ${title}`)
        console.error(error)
    }
}

function expect(actual) {
    // return an object
    return {
        // with functions such as toBe.. this helps with chaining
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        },
        toEqual(expected) {},
        toBeGreaterThan(expected) {},
    }
}
