// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css';
import { NavLink, Outlet } from 'react-router';
import { ThemeSwitch } from './components/ThemeSwitch';
import CompassIcon from './assets/compass.svg?react';

function App() {
  return (
    <>
      {/* <NavLink to="/search">Search</NavLink> */}
      <header className="mx-2.5 my-1.5 flex flex-row justify-between">
        <div className="flex items-center">
          <div>
            <CompassIcon
              aria-hidden="true"
              className="mr-1 inline-block size-[1.4em] -translate-y-[0.06em] align-middle"
            />
            <span className="text-lg font-semibold">github</span>
            <span className="text-lg font-semibold text-foreground-muted">
              _explorer
            </span>
          </div>
        </div>
        <ThemeSwitch />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
