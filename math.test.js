const math = require('./math')
const assert = require('assert')

assert.strictEqual(math.sum(2,2), 4)
assert.strictEqual(math.sum([1,1,2,2,3,3]), 12)