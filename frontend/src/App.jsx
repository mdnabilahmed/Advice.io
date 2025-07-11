import React from 'react'
import './App.css'
import Navbar from "./components/Navbar"




const App = () => {
  return (
    <div>
      <Navbar />
      <div className='h-229 bg-zinc-400 m-0 font-bold text-6xl p-0 box-border flex justify-center items-center'>
        Advice.io
      </div>
    </div>
  )
}

export default App
