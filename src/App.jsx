import { useState } from 'react'
import React from 'react'

import './App.css'
 
import Header from "/components/header.tsx"
import Gallery from "/components/gallery.tsx"
import GalleryPixel from "/components/galleryPixel.tsx"
import GalleryLunafon from "/components/galleryLunafon.tsx"
import AboutMe from "/components/aboutMe.tsx"
function App() {
  const [count, setCount] = useState("about");
  const [changePage, setChangepage] = useState(" ");
   
  return (
    <div className='   '>
      <Header  count={count} setCount={setCount} setChangepage={setChangepage}  />
      
    {count===("about") && <AboutMe changePage={changePage}  setChangepage={setChangepage} />}
     {count===("home") && <Gallery changePage={changePage}  setChangepage={setChangepage} />}
     {count===("lunafon") && <GalleryLunafon changePage={changePage}  setChangepage={setChangepage}/>  }
     {count===("pixel") && <GalleryPixel changePage={changePage}  setChangepage={setChangepage}/>  }
     
    </div>
  )
}

export default App
