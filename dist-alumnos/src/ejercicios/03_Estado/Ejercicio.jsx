/* ================================================================
   EJERCICIO 03 — Estado y Eventos
   ================================================================
   Crea un juego de adivinanza de número.
   El programa elige un número del 1 al 10 y el usuario adivina.
   ================================================================ */

import { useState } from 'react'

// Número secreto fijo (después lo haremos aleatorio)
const NUMERO_SECRETO = 7

export default function Ejercicio03() {
  // TODO 1: Crea un estado "intento" (string) para el input → useState('')
  // TODO 2: Crea un estado "intentos" (number) para contar cuántos intentos → useState(0)
  // TODO 3: Crea un estado "mensaje" (string) para mostrar pistas → useState('')
  // TODO 4: Crea un estado "ganado" (boolean) → useState(false)

  function comprobar() {
    // TODO 5: Convierte "intento" a número con Number(intento) o parseInt(intento)
    // TODO 6: Incrementa el contador de intentos en 1
    // TODO 7: Compara con NUMERO_SECRETO:
    //         - Si es igual: setMensaje('¡Correcto! 🎉') y setGanado(true)
    //         - Si es menor:  setMensaje('Demasiado bajo ⬇️')
    //         - Si es mayor:  setMensaje('Demasiado alto ⬆️')
  }

  function reiniciar() {
    // TODO 8: Resetea todos los estados a sus valores iniciales
  }

  return (
    <div>
      <div className="bloque-header">
        <h1>📝 Ejercicio 3 — Adivina el número</h1>
        <p>Estado y eventos: useState + onClick + onChange</p>
      </div>

      <div className="tarjeta mt-2">
        <h2>🔢 Adivina el número del 1 al 10</h2>

        {/* TODO 9: Muestra el número de intentos */}
        <p className="mt-1">Intentos: ???</p>

        {/* TODO 10: Si "ganado" es false muestra el formulario,
                     si es true muestra un mensaje de victoria */}

        {/* Formulario de intento */}
        <div className="flex gap-1 mt-2">
          <input
            type="number"
            min="1"
            max="10"
            placeholder="1 - 10"
            style={{ maxWidth: '120px' }}
            // TODO 11: Enlaza value con el estado "intento"
            // TODO 12: Enlaza onChange para actualizar "intento"
          />
          {/* TODO 13: Llama a comprobar() al hacer click */}
          <button className="btn-primario">Comprobar</button>
          <button className="btn-secundario" onClick={reiniciar}>Reiniciar</button>
        </div>

        {/* TODO 14: Muestra el mensaje de pista */}
        {/* PISTA: {mensaje && <p className="mt-1">{mensaje}</p>} */}
      </div>

      {/* EXTRA: Si acabas antes, intenta hacer que el número sea aleatorio:
                 Math.floor(Math.random() * 10) + 1
                 ¿Dónde pondrías este código? ¿Dentro o fuera del componente? */}
    </div>
  )
}
