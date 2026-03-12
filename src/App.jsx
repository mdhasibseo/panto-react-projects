import React from 'react'
import { Outlet } from 'react-router'
import Navber from './components/Navber'
import Footer from './components/Footer'

export const App = () => {
  return (
    <div>
      <Navber/>
      
      <main>
        <Outlet />

      </main>

      

      <Footer/>
    </div>
  )
}
