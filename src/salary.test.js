import { describe, it, expect } from 'vitest'
import { salaryAfterTax } from './salary.js'

describe('salaryAfterTax', () => {
  it('räknar rätt skatt', () => {
    expect(salaryAfterTax(10000, 0.30)).toBe(7000)
  })

  it('hanterar 0 skatt', () => {
    expect(salaryAfterTax(10000, 0)).toBe(10000)
  })
})