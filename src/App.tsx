// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import { NavLink, Outlet } from 'react-router'
import { ThemeSwitch } from './components/ThemeSwitch'

function App() {

  return (
    <>
    <div className="absolute top-0 right-0 m-1">
      <ThemeSwitch />
    </div>
    <NavLink to="/search">Search</NavLink>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
