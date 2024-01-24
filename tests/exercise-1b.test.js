import assert from 'assert'
import { getMiddle } from '../exercises/exercise-1b.js'

describe('getMiddle', () => {
  it('should return middle elements of a multi-element array', () => {
    assert.deepStrictEqual(getMiddle([4, 6, 1, 7, 9]), [6, 1, 7])
  })

  it('should return a single middle element for an array of three elements', () => {
    assert.deepStrictEqual(getMiddle([2, 3, 4]), [3])
  })

  it('should return an empty array for a two-element array', () => {
    assert.deepStrictEqual(getMiddle([1, 2]), [])
  })
})
