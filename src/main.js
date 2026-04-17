import { salaryAfterTax } from './salary.js'

document.querySelector('#app').innerHTML = `
  <div style="font-family: sans-serif; padding: 20px;">
    <h1>Lön efter skatt 💰</h1>

    <input id="salary" type="number" placeholder="Bruttolön" />
    <input id="tax" type="number" placeholder="Skatt (t.ex 0.30)" />

    <button id="calc">Räkna</button>

    <h2 id="result"></h2>
  </div>
`

document.querySelector('#calc').addEventListener('click', () => {
  const salary = Number(document.querySelector('#salary').value)
  const tax = Number(document.querySelector('#tax').value)

  const result = salaryAfterTax(salary, tax)

  document.querySelector('#result').textContent =
    `Nettolön: ${result.toFixed(2)}`
})