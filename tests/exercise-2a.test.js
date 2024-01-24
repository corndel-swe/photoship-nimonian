import assert from 'assert'
import { swapFirstLast } from '../exercises/exercise-2a.js'

describe('swapFirstLast', () => {
  it('should swap the first and last elements in a multi-element array', () => {
    assert.deepStrictEqual(swapFirstLast(['w', 'x', 'y', 'z']), [
      'z',
      'x',
      'y',
      'w'
    ])
  })

  it('should swap the elements in a two-element array', () => {
    assert.deepStrictEqual(swapFirstLast([1, 2]), [2, 1])
  })

  it('should correctly swap elements in an array with mixed types', () => {
    assert.deepStrictEqual(swapFirstLast([1, 'a', true]), [true, 'a', 1])
  })
})
