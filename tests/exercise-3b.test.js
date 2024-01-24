import assert from 'assert'
import { imageFiles } from '../exercises/exercise-3b.js'

describe('imageFiles', () => {
  it('should filter out non-image files and keep only .jpg and .png files', () => {
    assert.deepStrictEqual(imageFiles(['bird.jpg', 'notes.txt', 'car.png']), [
      'bird.jpg',
      'car.png'
    ])
  })

  it('should return the same array if it contains only .jpg and .png files', () => {
    assert.deepStrictEqual(imageFiles(['photo.jpg', 'image.png']), [
      'photo.jpg',
      'image.png'
    ])
  })

  it('should return an empty array if no .jpg or .png files are present', () => {
    assert.deepStrictEqual(imageFiles(['document.docx', 'script.js']), [])
  })

  it('should return an empty array for an empty input array', () => {
    assert.deepStrictEqual(imageFiles([]), [])
  })
})
