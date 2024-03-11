// For each of the exercises below, assume you are starting with the following people array.
// let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
// Write a command that prints out all of the people in the list.
// Write the command to remove "Dani" from the array.
// Write the command to remove "Juan" from the array.
// Write the command to move "Luis" to the front of the array.
// Write the command to add your name to the end of the array.
// Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
// Write the command that gives the indexOf where "Maria" is located.
// At the end of the exercise, there should be 4 people in the array.

let personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];
let mostrar = false;
let mostrarEliminarPersona = false;
let mostrarAgregarNombre = false;
let mostrarLoop = false;
let mostrarIndice = false;
let mostrarTodo = false;

function mostrarPersonas() {
  let resultado = document.getElementById("resultado5.1");
  if (!mostrar) {
    resultado.innerText =
      "Las personas en la lista son:\n" + personas.join(", ");
    mostrar = true;
  } else {
    resultado.innerText = "";
    mostrar = false;
  }
}

function eliminarPersona(persona, resultadoId) {
  let personasSinPersonaEliminada = personas.slice();

  let index = personasSinPersonaEliminada.indexOf(persona);
  if (index !== -1) {
    personasSinPersonaEliminada.splice(index, 1);
    let resultado = document.getElementById(resultadoId);
    if (!mostrarEliminarPersona) {
      resultado.innerText =
        "Las personas en la lista son:\n" +
        personasSinPersonaEliminada.join(", ");
      mostrarEliminarPersona = true;
    } else {
      resultado.innerText = "";
      mostrarEliminarPersona = false;
    }
  }
}

function agregarNombre(nombre) {
  let resultado = document.getElementById("resultado5.5");
  if (!mostrarAgregarNombre) {
    let nuevasPersonas = personas.slice();
    nuevasPersonas.push(nombre);
    resultado.innerText =
      "Las personas en la lista son:\n" + nuevasPersonas.join(", ");
    mostrarAgregarNombre = true;
  } else {
    resultado.innerText = "";
    mostrarAgregarNombre = false;
  }
}

function loopFor() {
  let resultado = document.getElementById("ejercicio5.6");
  if (!mostrarLoop) {
    for (let i = 0; i < personas.length; i++) {
      resultado.innerText += personas[i] + "\n";
      if (personas[i] === "Maria") {
        break;
      }
    }
    mostrarLoop = true;
  } else {
    resultado.innerText = "";
    mostrarLoop = false;
  }
}

function indiceMaria() {
  let indice = personas.indexOf("Maria");
  let resultado = document.getElementById("ejercicio5.7");
  if (!mostrarIndice) {
    resultado.innerText = "El índice de 'Maria' es: " + indice;
    mostrarIndice = true;
  } else {
    resultado.innerText = "";
    mostrarIndice = false;
  }
}

function obtener4Personas() {
  let resultado = document.getElementById("ejercicio5.8");
  if (!mostrarTodo) {
    while (personas.length > 4) {
      personas.pop();
    }
    resultado.innerText =
      "El arreglo esta completo con: " + personas.join(", ");
    mostrarTodo = true;
  } else {
    resultado.innerText = "";
    mostrarTodo = false;
  }
}
