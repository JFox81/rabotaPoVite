import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Счетчик: {count}
        </button>
        <p>
          Отредактируйте <code>src/App.jsx</code> и сохраните для проверки HMR
        </p>
      </div>
      <p className="read-the-docs">
        Нажмите на логотипы Vite и React, чтобы узнать больше
      </p>
      <p className="current-year">
        Текущий год: {new Date().getFullYear()}
      </p>
    </>
  )
}

export default App
