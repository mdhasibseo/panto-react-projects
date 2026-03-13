import React from 'react'
import { Outlet } from 'react-router'
import Navber from './components/Navber'
import Footer from './components/Footer'

export const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navber/>
      
      <main className='flex-1'>
        <Outlet />

      </main>

      

      <Footer/>
    </div>
  )
}
