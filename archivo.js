class Estudiante {
  constructor(nombre) {
    this.nombre = nombre;
    this.asignaturas = ["Javascript", "HTML", "CSS"];
  }

  obtenDatos() {
    return {
      nombre: this.nombre,
      asignaturas: this.asignaturas,
    };
  }
}

const estudiante1 = new Estudiante("Juan Pérez");

const datosEstudiante = estudiante1.obtenDatos();
console.log("Nombre:", datosEstudiante.nombre);
console.log("Asignaturas:", datosEstudiante.asignaturas);
