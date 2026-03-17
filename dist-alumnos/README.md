# ⚛️ Curso Práctico de React — USAL

Bienvenido/a al taller. Aquí tienes los ejercicios para trabajar durante el curso.

---

## 🚀 Puesta en marcha

> **Requisito:** tener [Node.js](https://nodejs.org) instalado (versión 18 o superior).
> Compruébalo con: `node --version`

```bash
# 1. Clona o descarga este repositorio
# 2. Entra en la carpeta
cd react-usal-ejercicios

# 3. Instala las dependencias (solo la primera vez)
npm install

# 4. Arranca el servidor de desarrollo
npm run dev
```

Abre el navegador en **http://localhost:5173** — verás el Ejercicio 1 cargado.

---

## 📁 Estructura

```
src/
├── App.jsx              ← aquí cambias el ejercicio activo
└── ejercicios/
    ├── 01_JSX/          → Ejercicio 1: JSX y Componentes
    ├── 02_Props/        → Ejercicio 2: Props y Listas
    ├── 03_Estado/       → Ejercicio 3: Estado y Eventos
    ├── 04_UseEffect/    → Ejercicio 4: useEffect y Fetch
    └── 05_ProyectoFinal/→ Proyecto Final: Todo App
```

---

## 🔄 Cómo cambiar de ejercicio

Edita `src/App.jsx`: **comenta** la línea activa y **descomenta** la del ejercicio que quieres trabajar.

```jsx
// Cambiar al ejercicio 2:
// import Componente from './ejercicios/01_JSX/Ejercicio.jsx'  ← comenta esta
import Componente from './ejercicios/02_Props/Ejercicio.jsx'   ← descomenta esta
```

Guarda el fichero y el navegador se recarga automáticamente.

---

## 📋 Ejercicios del curso

| # | Tema | Conceptos |
|---|------|-----------|
| 1 | JSX y Componentes | `function`, JSX, `{}`, `className`, renderizado condicional |
| 2 | Props y Listas | Props, desestructuración, `.map()`, `key` |
| 3 | Estado y Eventos | `useState`, `onClick`, `onChange`, formularios controlados |
| 4 | useEffect y Fetch | `useEffect`, fetch a API, loading/error/data |
| 5 | Proyecto Final | Todo lo anterior — app de tareas completa |

---

## 💡 Convenciones

- `// TODO X:` — pasos que debes implementar, en orden
- `// PISTA:` — ayuda sin revelar la solución
- `// EXTRA:` — reto opcional si terminas antes

---

## 🔗 Recursos de referencia

| Recurso | Enlace |
|---------|--------|
| Documentación oficial React | https://react.dev |
| API de prueba (ejercicio 4) | https://jsonplaceholder.typicode.com |
