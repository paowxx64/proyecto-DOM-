 
import { agregarTarea, alternarTarea, eliminarTarea, obtenerTareas } from "./tareas.js";
import { mostrarMensaje, renderizarTareas } from "./interfaz.js";

const formulario = document.querySelector("#formulario-tarea");
const campoTitulo = document.querySelector("#titulo");
const campoPrioridad = document.querySelector("#prioridad");
const mensaje = document.querySelector("#mensaje");
const lista = document.querySelector("#lista-tareas");
const resumen = document.querySelector("#resumen");
const filtros = document.querySelector("nav");
let filtroActivo = "todas";

function actualizarVista() {
  const tareas = obtenerTareas();
  renderizarTareas(lista, tareas, filtroActivo);
  const pendientes = tareas.filter((tarea) => !tarea.completada).length;
  resumen.textContent = `Pendientes: ${pendientes}`;
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const titulo = campoTitulo.value.trim();

  if (titulo === "") {
    mostrarMensaje(mensaje, "Escribe una tarea antes de agregarla.", true);
    return;
  }
const prioridad = campoPrioridad.value;
  agregarTarea(titulo, prioridad);
  campoTitulo.value = "";
  mostrarMensaje(mensaje, "Tarea agregada.");
  actualizarVista();
});

lista.addEventListener("click", (evento) => {
  const boton = evento.target.closest("button");
  if (!boton) return;

  const item = boton.closest("li");
  const id = Number(item.dataset.id);

  if (boton.dataset.accion === "alternar") alternarTarea(id);
  if (boton.dataset.accion === "eliminar") eliminarTarea(id);
  actualizarVista();
});

filtros.addEventListener("click", (evento) => {
  const boton = evento.target.closest("button[data-filtro]");
  if (!boton) return;
  filtroActivo = boton.dataset.filtro;
  actualizarVista();
});

actualizarVista();