// https://swe-docs.netlify.app/js/array-push-pop.html

/**
 * Given an array, take the last element and put it on the front
 *
 * e.g. ['x', 'y', 'z'] => ['z', 'x', 'y']
 *
 * @param {Array} arr - The input array
 * @returns {Array} The array with the last element at the front
 */
export function arrayRotate(arr) {
  const last = arr.pop()
  arr.unshift(last)
  return arr
}
