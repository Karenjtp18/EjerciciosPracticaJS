// Write a function that performs the bubble algorithm.
// Input [3, 6, 12, 5, 100, 1]
// Output [1, 3, 5, 6, 12, 100]

function ordenamientoBurbuja(array) {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

function ordenarBurbuja() {
  let inputArray = [3, 6, 12, 5, 100, 1];
  let sortedArray = ordenamientoBurbuja(inputArray);
  let resultado = document.getElementById("resultadoultimo");
  resultado.innerText = "Resultado: " + sortedArray.join(", ");
}
