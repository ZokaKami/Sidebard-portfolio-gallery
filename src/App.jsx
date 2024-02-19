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
  console.log(count)
  return (
    <div className=' '>
      <Header  count={count} setCount={setCount}  />

     {count===("home") && <Gallery/>}
     {count===("pixel") && <GalleryPixel/>}
     {count===("comissions") && <Comissions/>}
    </div>
  )
}

export default App
