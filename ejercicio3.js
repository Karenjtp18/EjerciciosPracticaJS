// Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
// Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.

let elResultadoEsVisible = false;

function sumayMultiplicaciondeArray(array) {
  let resultadoDelElemento = document.getElementById("resultado3");
  if (!elResultadoEsVisible) {
    let resultado = array.reduce(
      function (acc, elemento) {
        acc.suma += elemento;
        acc.producto *= elemento;
        return acc;
      },
      { suma: 0, producto: 1 }
    );
    resultadoDelElemento.innerText = `La suma es ${resultado.suma}. El producto es ${resultado.producto}.`;
    elResultadoEsVisible = true;
  } else {
    resultadoDelElemento.innerText = " ";
    elResultadoEsVisible = false;
  }
}
