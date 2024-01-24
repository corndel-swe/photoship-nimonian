import assert from 'assert'
import { filterConvertFiles } from '../exercises/exercise-2b.js'

describe('filterConvertFiles', () => {
  it('should filter out files smaller than 1000KB and convert the rest to MB', () => {
    assert.deepStrictEqual(filterConvertFiles([1400, 500, 2100]), [1.4, 2.1])
  })

  it('should convert all elements to MB when all are above 1000KB', () => {
    assert.deepStrictEqual(
      filterConvertFiles([1500, 2000, 2500]),
      [1.5, 2.0, 2.5]
    )
  })

  it('should return an empty array when all elements are below 1000KB', () => {
    assert.deepStrictEqual(filterConvertFiles([500, 800, 900]), [])
  })

  it('should return an empty array for an empty array', () => {
    assert.deepStrictEqual(filterConvertFiles([]), [])
  })

  it('should include files that are exactly 1000KB and convert them to MB', () => {
    assert.deepStrictEqual(filterConvertFiles([1000, 2000, 3000]), [1, 2, 3])
  })
})
