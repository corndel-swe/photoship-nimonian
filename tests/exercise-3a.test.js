import assert from 'assert'
import { nameTag } from '../exercises/exercise-3a.js'

describe('nameTag', () => {
  it('should convert a regular name from Lastname,Firstname to Firstname Lastname format', () => {
    assert.strictEqual(nameTag('Doe,Jane'), 'Jane Doe')
  })
})
