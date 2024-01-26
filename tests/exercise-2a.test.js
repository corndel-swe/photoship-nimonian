import assert from 'assert'
import { arrayRotate } from '../exercises/2a.js'

describe('arrayRotate', () => {
  it('puts the last element to the front', () => {
    assert.deepStrictEqual(arrayRotate(['x', 'y', 'z']), ['z', 'x', 'y'])
  })

  it('should swap the elements in a two-element array', () => {
    assert.deepStrictEqual(arrayRotate([1, 2]), [2, 1])
  })

  it('should correctly rotate elements in an array with mixed types', () => {
    assert.deepStrictEqual(arrayRotate([1, 'a', true]), [true, 1, 'a'])
  })
})
