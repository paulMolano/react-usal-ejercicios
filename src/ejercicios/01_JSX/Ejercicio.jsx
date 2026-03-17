/* ================================================================
   EJERCICIO 01 — JSX y Componentes
   ================================================================
   Crea un componente que muestre tu perfil de estudiante.
   Sigue los pasos marcados con TODO.
   ================================================================ */

import Enunciado from '../../components/Enunciado.jsx'

function PerfilEstudiante() {
  // TODO 1: Declara una constante "nombre" con tu nombre completo
  // TODO 2: Declara una constante "carrera" con tu carrera
  // TODO 3: Declara una constante booleana "aprobado" = true

  return (
    <div className="tarjeta">
      {/* TODO 4: Muestra el nombre dentro de un <h2> */}

      {/* TODO 5: Muestra la carrera dentro de un <p> */}

      {/* TODO 6: Si aprobado es true, muestra un <span> con el texto "✅ Aprobado"
                  PISTA: usa el operador &&
                  Ejemplo: {aprobado && <span>Texto</span>} */}

      {/* TODO 7: Muestra el nombre en MAYÚSCULAS dentro de un <p>
                  PISTA: usa nombre.toUpperCase() */}

      <p style={{ color: '#a3a3a3', fontStyle: 'italic' }}>Completa los TODOs para ver tu perfil aquí ↑</p>
    </div>
  )
}

export default function Ejercicio01() {
  return (
    <div>
      <div className="bloque-header">
        <h1>📝 Ejercicio 1 — Tu Perfil de Estudiante</h1>
        <p>Crea un componente con tu información</p>
      </div>
      <Enunciado
        objetivo="Crea un componente React que muestre tu perfil de estudiante"
        pasos={[
          'Declara las constantes nombre, carrera y aprobado dentro del componente PerfilEstudiante',
          'Muéstralas en el JSX usando expresiones {}',
          'Usa el operador && para mostrar el badge ✅ Aprobado solo si aprobado es true',
          'Muestra el nombre en mayúsculas con nombre.toUpperCase()',
          'Usa <PerfilEstudiante /> dos veces para comprobar que el componente es reutilizable',
        ]}
        conceptos={['JSX', 'Componentes', 'Expresiones {}', 'Renderizado condicional']}
      />


      {/* TODO 8: Usa el componente <PerfilEstudiante /> aquí */}

      {/* TODO 9: Úsalo una segunda vez debajo del primero
                  para ver que el mismo componente se puede reutilizar */}
    </div>
  )
}
