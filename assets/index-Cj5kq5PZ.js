(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e,t){return e*(1-t)}document.querySelector(`#app`).innerHTML=`
  <h1>Lön efter skatt 💰</h1>

  <input id="salary" type="number" placeholder="Bruttolön" />
  <input id="tax" type="number" placeholder="Skatt (t.ex 0.30)" />

  <br /><br />

  <button id="calc">Räkna</button>

  <h2 id="result"></h2>
`,document.querySelector(`#calc`).addEventListener(`click`,()=>{let t=e(Number(document.querySelector(`#salary`).value),Number(document.querySelector(`#tax`).value));document.querySelector(`#result`).textContent=`Nettolön: ${t.toFixed(2)}`});