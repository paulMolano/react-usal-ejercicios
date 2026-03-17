/* ================================================================
   EJERCICIO 04 — useEffect y Fetch
   ================================================================
   Carga usuarios de la API JSONPlaceholder y muéstralos en tarjetas.
   API: https://jsonplaceholder.typicode.com/users
   ================================================================ */

import { useState, useEffect } from 'react'

// Ejemplo de lo que devuelve la API:
// {
//   id: 1,
//   name: "Leanne Graham",
//   email: "Sincere@april.biz",
//   company: { name: "Romaguera-Crona" }
// }

// TODO 1: Crea un componente "TarjetaUsuario" que reciba por props:
//         nombre, email, empresa
//         y los muestre en una tarjeta

export default function Ejercicio04() {
  // TODO 2: Crea tres estados: usuarios (array), cargando (bool), error (string o null)

  // TODO 3: Usa useEffect para cargar los datos al montar el componente
  //         URL: https://jsonplaceholder.typicode.com/users
  //         PISTA:
  //         useEffect(() => {
  //           async function cargar() {
  //             try {
  //               const res = await fetch('URL AQUÍ')
  //               const data = await res.json()
  //               setUsuarios(data)
  //             } catch(err) {
  //               setError('Error al cargar')
  //             } finally {
  //               setCargando(false)
  //             }
  //           }
  //           cargar()
  //         }, [])   ← array vacío = solo al montar

  return (
    <div>
      <div className="bloque-header">
        <h1>📝 Ejercicio 4 — Lista de Usuarios</h1>
        <p>useEffect + fetch a una API real</p>
      </div>

      {/* TODO 4: Muestra "Cargando..." si cargando es true */}
      {/* TODO 5: Muestra el mensaje de error si error no es null */}
      {/* TODO 6: Cuando los datos estén listos, mapea los usuarios
                  y usa <TarjetaUsuario /> para cada uno
                  PISTA: usa user.name, user.email, user.company.name */}
      <div className="grid-cards mt-2">
      </div>
    </div>
  )
}
