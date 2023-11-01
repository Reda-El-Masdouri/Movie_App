import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
export default function RootLayout() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
