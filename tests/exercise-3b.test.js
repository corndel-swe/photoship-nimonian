import assert from 'assert'
import { formatPrice } from '../exercises/3b.js'

describe('formatPrice', () => {
  it('should format the amount as a price with the currency symbol', () => {
    assert.strictEqual(formatPrice(12.83795, '£'), '£12.84')
  })

  it('should add trailing 0 if needed', () => {
    assert.strictEqual(formatPrice(2.5, '$'), '$2.50')
  })

  it('should handle zero correctly', () => {
    assert.strictEqual(formatPrice(0, '$'), '$0.00')
  })

  it('should handle negative numbers', () => {
    assert.strictEqual(formatPrice(-10.99, '€'), '€-10.99')
  })

  it('should format the price correctly with large numbers', () => {
    assert.strictEqual(formatPrice(123456.789, '¥'), '¥123456.79')
  })

  it('should handle different currency symbols', () => {
    assert.strictEqual(formatPrice(100, '₹'), '₹100.00')
  })
})
