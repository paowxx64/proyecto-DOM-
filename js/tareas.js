 
let tareas = [];
let siguienteId = 1;

export function agregarTarea(titulo, prioridad) {
  const tarea = { id: siguienteId, titulo, completada: false, prioridad };
  tareas.push(tarea);
  siguienteId += 1;
}

export function alternarTarea(id) {
  const tarea = tareas.find((item) => item.id === id);
  if (tarea) tarea.completada = !tarea.completada;
}

export function eliminarTarea(id) {
  tareas = tareas.filter((item) => item.id !== id);
}

export function obtenerTareas() {
  return tareas;
}