import assert from 'assert'
import { firstAddLast } from '../exercises/exercise-1a.js'

describe('firstAddLast', () => {
  it('should return the sum of the first and last elements in a multi-element array', () => {
    assert.strictEqual(firstAddLast([4, 1, 9, 5, 2]), 6)
  })

  it('should handle negative numbers correctly', () => {
    assert.strictEqual(firstAddLast([-3, 1, 4, -2]), -5)
  })
})
