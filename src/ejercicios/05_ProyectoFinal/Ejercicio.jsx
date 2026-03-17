/* ================================================================
   EJERCICIO 05 — Proyecto Final: Lista de Tareas (Todo App)
   ================================================================
   Construye una app de tareas usando TODO lo aprendido:
   ✅ Componentes    ✅ Props    ✅ Estado    ✅ Eventos
   ================================================================

   FUNCIONALIDADES A IMPLEMENTAR:
   1. Añadir una tarea escribiendo en un input y pulsando Enter o botón
   2. Marcar/desmarcar una tarea como completada
   3. Eliminar una tarea
   4. Mostrar cuántas tareas quedan pendientes
   ================================================================ */

import { useState } from 'react'
import Enunciado from '../../components/Enunciado.jsx'

// ────────────────────────────────────────────────────────
// TODO A: Componente "ItemTarea"
//   Props: id, texto, completada, onToggle, onEliminar
//   Muestra: checkbox + texto (tachado si completada) + botón eliminar
//   PISTA para tachar: className={completada ? 'tachado' : ''}
// ────────────────────────────────────────────────────────
function ItemTarea({ id, texto, completada, onToggle, onEliminar }) {
  // TODO: implementar este componente
  return null
}

// ────────────────────────────────────────────────────────
// Componente principal
// ────────────────────────────────────────────────────────
export default function Ejercicio05() {
  // TODO B: Estado para el texto del input → useState('')
  // TODO C: Estado para el array de tareas → useState([])
  //         Cada tarea: { id: ..., texto: '...', completada: false }

  function agregarTarea() {
    // TODO D: Si el input está vacío, no hagas nada (return)
    // TODO E: Crea una nueva tarea con id único (Date.now()), texto e completada: false
    // TODO F: Añádela al array: setTareas([...tareas, nuevaTarea])
    // TODO G: Limpia el input: setTexto('')
  }

  function toggleTarea(id) {
    // TODO H: cambia "completada" de la tarea con ese id
    // PISTA: setTareas(tareas.map(t => t.id === id ? { ...t, completada: !t.completada } : t))
  }

  function eliminarTarea(id) {
    // TODO I: filtra las tareas quitando la que tiene ese id
    // PISTA: setTareas(tareas.filter(t => t.id !== id))
  }

  // TODO J: Calcula cuántas tareas están pendientes
  const pendientes = 0

  return (
    <div>
      <div className="bloque-header">
        <h1>📝 Proyecto Final — Lista de Tareas</h1>
        <p>Pon en práctica todo lo aprendido en el curso</p>
      </div>

      <Enunciado
        objetivo="Construye una Todo App completa combinando todo lo aprendido"
        pasos={[
          'Crea el componente ItemTarea con props: id, texto, completada, onToggle, onEliminar',
          'ItemTarea debe mostrar: checkbox, texto (tachado si completada) y botón eliminar',
          'Declara los estados: texto del input (string) y tareas (array vacío)',
          'Implementa agregarTarea(): valida que no esté vacío, añade al array, limpia el input',
          'Implementa toggleTarea(id): usa .map() para invertir completada de esa tarea',
          'Implementa eliminarTarea(id): usa .filter() para quitar la tarea del array',
          'Calcula las tareas pendientes y muéstralas en el badge del título',
        ]}
        conceptos={['useState', 'Props', '.map()', '.filter()', 'Componentes', 'Eventos']}
        extra="Añade un filtro para ver: Todas / Pendientes / Completadas"
      />

      <div className="tarjeta mt-2">
        <h2>
          Mis Tareas{' '}
          {/* TODO K: Muestra el badge con el número de pendientes */}
        </h2>

        {/* Input para nueva tarea */}
        <div className="flex gap-1 mt-2 mb-2">
          <input
            type="text"
            placeholder="Nueva tarea..."
            // TODO L: Enlaza value y onChange
            // TODO M: Llama a agregarTarea() al pulsar Enter
            //         PISTA: onKeyDown={(e) => e.key === 'Enter' && agregarTarea()}
          />
          <button className="btn-primario" onClick={agregarTarea}>
            Añadir
          </button>
        </div>

        {/* Lista de tareas */}
        {/* TODO N: Si no hay tareas, muestra "No hay tareas. ¡Añade una!" */}
        <ul>
          {/* TODO O: Mapea las tareas usando el componente <ItemTarea /> */}
        </ul>
      </div>
    </div>
  )
}
