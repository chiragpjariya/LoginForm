// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import ContextPovider from './context/ContextPovider'
import Header from './components/Header'
function App() {


  return (
    <>
      <Header />
      <ContextPovider>
      <Outlet />
      </ContextPovider>

    </>
  )
}

export default App
