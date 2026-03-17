/* ================================================================
   Enunciado — muestra el briefing del ejercicio en el navegador
   Props:
     objetivo    (string)   — frase corta describiendo qué hay que hacer
     pasos       (string[]) — lista ordenada de tareas
     conceptos   (string[]) — badges con los conceptos del ejercicio
     extra       (string?)  — reto opcional
     esSolucion  (bool?)    — si true, adapta el texto para mostrar la solución
   ================================================================ */

export default function Enunciado({ objetivo, pasos, conceptos, extra, esSolucion = false }) {
  return (
    <div className={`enunciado${esSolucion ? ' enunciado-solucion' : ''}`}>
      <h3>{esSolucion ? '✅' : '🎯'} {objetivo}</h3>
      {esSolucion && <p className="enunciado-subtitulo">Qué se ha implementado:</p>}
      <ol>
        {pasos.map((paso, i) => (
          <li key={i}>{paso}</li>
        ))}
      </ol>
      {conceptos && (
        <div className="enunciado-conceptos">
          {conceptos.map((c, i) => (
            <span key={i} className="enunciado-concepto">{c}</span>
          ))}
        </div>
      )}
      {extra && <p className="enunciado-extra">⭐ Extra implementado: {extra}</p>}
    </div>
  )
}
