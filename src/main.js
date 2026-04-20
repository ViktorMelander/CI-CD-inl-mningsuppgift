import { salaryAfterTax } from './salary.js'

document.querySelector('#calc').addEventListener('click', () => {
  const salary = Number(document.querySelector('#salary').value)
  const tax = Number(document.querySelector('#tax').value)

  const result = salaryAfterTax(salary, tax)

  document.querySelector('#result').textContent =
    `Nettolön: ${result.toFixed(2)}`
})