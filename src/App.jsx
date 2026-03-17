import { useState, useEffect } from 'react'

import Ejercicio01 from './ejercicios/01_JSX/Ejercicio.jsx'
import Ejercicio02 from './ejercicios/02_Props/Ejercicio.jsx'
import Ejercicio03 from './ejercicios/03_Estado/Ejercicio.jsx'
import Ejercicio04 from './ejercicios/04_UseEffect/Ejercicio.jsx'
import Ejercicio05 from './ejercicios/05_ProyectoFinal/Ejercicio.jsx'

const EJERCICIOS = [
  { id: 'e1', etiqueta: 'Ejercicio 1 · JSX',          componente: Ejercicio01 },
  { id: 'e2', etiqueta: 'Ejercicio 2 · Props',         componente: Ejercicio02 },
  { id: 'e3', etiqueta: 'Ejercicio 3 · Estado',        componente: Ejercicio03 },
  { id: 'e4', etiqueta: 'Ejercicio 4 · useEffect',     componente: Ejercicio04 },
  { id: 'e5', etiqueta: 'Ejercicio 5 · Proyecto Final',componente: Ejercicio05 },
]

const css = {
  fab: {
    position: 'fixed', bottom: 24, right: 24,
    width: 52, height: 52, borderRadius: '50%',
    background: '#024ad8', color: '#fff',
    border: 'none', fontSize: 22, cursor: 'pointer',
    boxShadow: '0 4px 14px rgba(2,74,216,.45)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 200, transition: 'background .15s',
  },
  overlay: {
    position: 'fixed', inset: 0,
    background: 'rgba(0,0,0,.25)',
    zIndex: 150,
  },
  panel: open => ({
    position: 'fixed', top: 0, right: open ? 0 : -320,
    width: 300, height: '100dvh',
    background: '#fff',
    boxShadow: '-4px 0 24px rgba(0,0,0,.15)',
    display: 'flex', flexDirection: 'column',
    zIndex: 160,
    transition: 'right .25s cubic-bezier(.4,0,.2,1)',
    overflowY: 'auto',
  }),
  panelHeader: {
    background: '#024ad8', color: '#fff',
    padding: '16px 20px',
    fontSize: 15, fontWeight: 700,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    flexShrink: 0,
  },
  cerrar: {
    background: 'none', border: 'none', color: '#fff',
    fontSize: 20, cursor: 'pointer', lineHeight: 1, padding: '0 2px',
  },
  grupoTitulo: {
    padding: '10px 20px 4px',
    fontSize: 11, fontWeight: 700, letterSpacing: '.08em',
    textTransform: 'uppercase', color: '#636363',
    borderBottom: '1px solid #e8e8e8',
  },
  item: activo => ({
    display: 'block', width: '100%', textAlign: 'left',
    padding: '9px 20px',
    background: activo ? '#e4eefa' : 'none',
    color: activo ? '#024ad8' : '#1a1a1a',
    fontWeight: activo ? 700 : 400,
    border: 'none', cursor: 'pointer', fontSize: 14,
    transition: 'background .12s',
  }),
}

export default function App() {
  const [vistaId, setVistaId]           = useState('e1')
  const [panelAbierto, setPanelAbierto] = useState(false)

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setPanelAbierto(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const seleccionar = id => { setVistaId(id); setPanelAbierto(false) }

  const { componente: Componente } = EJERCICIOS.find(e => e.id === vistaId)

  return (
    <>
      <Componente />

      {/* FAB */}
      <button
        style={css.fab}
        onClick={() => setPanelAbierto(p => !p)}
        title="Cambiar ejercicio"
        aria-label="Abrir selector de ejercicios"
      >
        ☰
      </button>

      {/* Overlay */}
      {panelAbierto && (
        <div style={css.overlay} onClick={() => setPanelAbierto(false)} />
      )}

      {/* Panel */}
      <nav style={css.panel(panelAbierto)} aria-label="Selector de ejercicios">
        <div style={css.panelHeader}>
          <span>📝 Ejercicios</span>
          <button style={css.cerrar} onClick={() => setPanelAbierto(false)} aria-label="Cerrar">✕</button>
        </div>

        <div style={css.grupoTitulo}>⚛️ Curso de React — USAL</div>

        {EJERCICIOS.map(({ id, etiqueta }) => (
          <button
            key={id}
            style={css.item(id === vistaId)}
            onClick={() => seleccionar(id)}
          >
            {etiqueta}
          </button>
        ))}
      </nav>
    </>
  )
}
