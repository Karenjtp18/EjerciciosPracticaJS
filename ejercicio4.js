// let student1Courses = ['Math', 'English', 'Programming'];
// let student2Courses = ['Geography', 'Spanish', 'Programming'];
// Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.

let student1Courses = ["Math", "English", "Programming"];
let student2Courses = ["Geography", "Spanish", "Programming"];

function encontrarCursosenComun(cursos1, cursos2) {
  return cursos1.filter((course) => cursos2.includes(course));
}

let cursosEnComun = encontrarCursosenComun(student1Courses, student2Courses);

let mostrarResultado = false;

function mostrarOcultarResultado() {
  let resultado = document.getElementById("resultado4");
  if (!mostrarResultado) {
    resultado.innerText = "Cursos en comun: " + cursosEnComun.join(", ");
    mostrarResultado = true;
  } else {
    resultado.innerText = "";
    mostrarResultado = false;
  }
}
