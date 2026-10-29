 
export function mostrarMensaje(elemento, texto, esError = false) {
  elemento.textContent = texto;
  elemento.classList.toggle("error", esError);
}

export function renderizarTareas(lista, tareas, filtro) {
  lista.textContent = "";

 const visibles = tareas.filter((tarea) => {
    if (filtro === "pendientes") return !tarea.completada;
    if (filtro === "completadas") return tarea.completada;

    if (filtro === "alta") return tarea.prioridad === "alta";
    if (filtro === "media") return tarea.prioridad === "media";
    if (filtro === "baja") return tarea.prioridad === "baja";

    return true;
});

  visibles.forEach((tarea) => {
    const item = document.createElement("li");
    item.dataset.id = tarea.id;
    item.classList.toggle("completada", tarea.completada);

    const etiquetaPrioridad = document.createElement("span");
etiquetaPrioridad.textContent = `(${tarea.prioridad})`;
item.classList.add(`prioridad-${tarea.prioridad}`);

    const texto = document.createElement("span");
    texto.textContent = tarea.titulo;

    const completar = document.createElement("button");
    completar.textContent = tarea.completada ? "Desmarcar" : "Completar";
    completar.dataset.accion = "alternar";

    const eliminar = document.createElement("button");
    eliminar.textContent = "Eliminar";
    eliminar.dataset.accion = "eliminar";

    item.append(texto, etiquetaPrioridad, completar, eliminar);
    lista.append(item);
  });
}