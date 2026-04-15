export function compoundInterest(principal, rate, years) {
  return principal * Math.pow(1 + rate, years);
}