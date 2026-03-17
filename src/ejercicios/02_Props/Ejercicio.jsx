/* ================================================================
   EJERCICIO 02 — Props y Listas
   ================================================================
   Construye una galería de tus asignaturas favoritas usando
   props y .map().
   ================================================================ */

// TODO 1: Crea un componente llamado "TarjetaAsignatura"
//         Debe recibir por props: nombre, creditos, nota
//         Debe mostrar: nombre, créditos y si está superada (nota >= 5)
//         PISTA: function TarjetaAsignatura({ nombre, creditos, nota }) { ... }

// TODO 2: Crea un array llamado "misAsignaturas" con al menos 4 asignaturas.
//         Cada objeto debe tener: id, nombre, creditos, nota
//         Ejemplo: { id: 1, nombre: 'Programación', creditos: 6, nota: 7 }
const misAsignaturas = []

export default function Ejercicio02() {
  return (
    <div>
      <div className="bloque-header">
        <h1>📝 Ejercicio 2 — Mis Asignaturas</h1>
        <p>Props y listas con .map()</p>
      </div>

      {/* TODO 3: Usa <TarjetaAsignatura /> una vez de forma manual
                  pasando los datos como props directamente */}

      {/* TODO 4: Usa misAsignaturas.map() para renderizar todas las asignaturas
                  Recuerda incluir la prop key={asig.id} */}
      <div className="grid-cards mt-2">
        {/* Aquí va el .map() */}
      </div>
    </div>
  )
}
