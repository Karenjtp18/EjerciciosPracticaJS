// Write a function that:
// Takes in an array of numbers.
// Doubles the value of each number in the array.
// Prints out the new updated array.
// Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]

let numeros = [1, 2, 4, 5];
let esElresultadoVisible = false;

function duplicarNumeros() {
  let newArray = numeros.map(function (numero) {
    return numero * 2;
  });
  if (esElresultadoVisible) {
    document.getElementById("resultado2").innerText = "";
    esElresultadoVisible = false;
  } else {
    document.getElementById("resultado2").innerText =
      "[" + newArray.join(", ") + "]";
    esElresultadoVisible = true;
  }
}
