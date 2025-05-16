import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Декларативный React компонент
function App() {
  const [count, setCount] = useState(0); // Использование хука состояния (декларативный подход)

  // Императивное создание элементов UI с помощью React.createElement (в отличие от декларативного JSX)
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'div',
      null,
      React.createElement(
        'a',
        { href: 'https://vite.dev', target: '_blank' },
        React.createElement('img', { src: viteLogo, className: 'logo', alt: 'Vite logo' })
      ),
      React.createElement(
        'a',
        { href: 'https://react.dev', target: '_blank' },
        React.createElement('img', { src: reactLogo, className: 'logo react', alt: 'React logo' })
      )
    ),
    React.createElement('h1', null, 'Vite + React'),
    React.createElement(
      'div',
      { className: 'card' },
      React.createElement(
        'button',
        { onClick: () => setCount((count) => count + 1) }, // Императивное действие: обновление состояния (вызывает декларативное обновление UI)
        `Счетчик: ${count}`
      ),
      React.createElement(
        'p',
        null,
        React.createElement('code', null, 'src/App.jsx'),
        ' и сохраните для проверки HMR'
      )
    ),
    React.createElement(
      'p',
      { className: 'read-the-docs' },
      'Нажмите на логотипы Vite и React, чтобы узнать больше'
    ),
    React.createElement(
      'p',
      { className: 'current-year' },
      `Текущий год: ${new Date().getFullYear()}`
    )
  )
}

export default App
