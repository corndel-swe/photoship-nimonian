import assert from 'assert'
import { nameTag } from '../exercises/3a.js'

describe('nameTag', () => {
  it('should return a greeting with the name in uppercase', () => {
    assert.strictEqual(nameTag('abdi'), 'Hello, my name is ABDI!')
  })

  it('should handle names already in uppercase', () => {
    assert.strictEqual(nameTag('ALICE'), 'Hello, my name is ALICE!')
  })

  it('should handle names with mixed case', () => {
    assert.strictEqual(nameTag('eLiZaBeTh'), 'Hello, my name is ELIZABETH!')
  })

  it('should handle single-character names', () => {
    assert.strictEqual(nameTag('b'), 'Hello, my name is B!')
  })
})
