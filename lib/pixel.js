import { sumArray } from './helpers.js'

/*
What we really need is someone to finish the pixel manipulation functions
below. Each one of them accepts the rgb of a single pixel. E.g.
[100, 20, 210]. Each one should return the modified array.

These will be picked up by the rest of the system and applied to each pixel
in the image! That logic has already been written.
*/

export function removeRed(rgb) {
  // TODO: set the red value in the rgb array to 0
  // make sure to return the new array!
}

export function removeGreen(rgb) {
  // TODO: set the green value in the rgb array to 0
}

export function removeBlue(rgb) {
  // TODO: set the blue value in the rgb array to 0
}

export function replaceRed(rgb, val) {
  // TODO: replace the red value in the rgb array with given val
}

export function replaceGreen(rgb, val) {
  // TODO: replace the green value in the rgb array with given val
}

export function replaceBlue(rgb, val) {
  // TODO: replace the blue value in the rgb array with given val
}

export function grayScale(rgb) {
  // TODO: set each value of the rgb array to the average of the array
  //
  // e.g. [4, 5, 12] => [7, 7, 7]
  // n.b. we may use this for larger arrays in the future so suggest you use .map
  //
  // The `sumArray()` helper function has been imported at the top of this file
  // for you convenience!
}

export function invert(rgb) {
  // TODO: set each value in the array to (255 - value)
  // e.g. [50, 100, 210] => [205, 155, 45]
  // n.b. we may use this for larger arrays in the future so suggest you use .map
}
