import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 
import Header from "/components/header.tsx"
import Gallery from "/components/gallery.tsx"
import GalleryPixel from "/components/galleryPixel.tsx"
import Comissions from "/components/comissions.tsx"
function App() {
  const [count, setCount] = useState("home");
  const [changePage, setChangepage] = useState(" ");
   
  return (
    <div className='   '>
      <Header  count={count} setCount={setCount} setChangepage={setChangepage}  />
      

     {count===("home") && <Gallery changePage={changePage}  setChangepage={setChangepage} />}
     {count===("pixel") && <GalleryPixel/>}
     {count===("comissions") && <Comissions/>}
    </div>
  )
}

export default App
