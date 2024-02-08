import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 
import Header from "/components/header.tsx"
import Gallery from "/components/gallery.tsx"

function App() {
   

  return (
    <div className=' '>
      <Header/>
      <Gallery/>
    </div>
  )
}

export default App
