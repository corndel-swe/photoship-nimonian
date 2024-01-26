import assert from 'assert'
import { convertFilesizes } from '../exercises/2b.js'

describe('convertFilesizes', () => {
  it('should convert an array of file sizes from KB to MB', () => {
    assert.deepStrictEqual(convertFilesizes([1400, 500, 2100]), [1.4, 0.5, 2.1])
  })

  it('should handle an empty array', () => {
    assert.deepStrictEqual(convertFilesizes([]), [])
  })

  it('should handle arrays with a single element', () => {
    assert.deepStrictEqual(convertFilesizes([1000]), [1])
  })

  it('should handle arrays with large numbers', () => {
    assert.deepStrictEqual(convertFilesizes([1000000, 500000]), [1000, 500])
  })

  it('should handle arrays with small numbers', () => {
    assert.deepStrictEqual(convertFilesizes([10, 50]), [0.01, 0.05])
  })
})
