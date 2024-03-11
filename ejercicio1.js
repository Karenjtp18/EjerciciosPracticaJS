// let arr = ["This", "is", "a", "sentence."];
// function printOutString() {
// your code here
//   let resultado = arr.join(" ");

//   document.getElementById("resultado").innerText = resultado;
// }

// printOutString();
//Complete the function to print out the string: This is a sentence.

let arr = ["This", "is", "a", "sentence."];
let resultadoVisible = false;

function printOutString() {
  if (resultadoVisible) {
    document.getElementById("resultado").innerText = "";
    resultadoVisible = false;
  } else {
    let resultado = arr.join(" ");
    document.getElementById("resultado").innerHTML = resultado;
    resultadoVisible = true;
  }
}
