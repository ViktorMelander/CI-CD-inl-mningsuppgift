import { describe, it, expect } from 'vitest'
import { compoundInterest } from './interest.js'

describe('compoundInterest', () => {
  it('räknar korrekt', () => {
    expect(compoundInterest(1000, 0.05, 2)).toBeCloseTo(1102.5)
  })
})