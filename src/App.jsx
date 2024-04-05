import { useState } from 'react'
import React from 'react'

import './App.css'
 
import Header from "/components/header.tsx"
import Gallery from "/components/gallery.tsx"
import GalleryPixel from "/components/galleryPixel.tsx"
import GalleryLunafon  from "/components/galleryLunafon.tsx"
import AboutMe from "/components/aboutMe.tsx"
 
import {   BrowserRouter, Route,Routes ,useLoaderData} from "react-router-dom";
import RenderPage from "/components/renderPages/renderLunafon.tsx";
 import RenderPagePixel from "/components/renderPages/renderPixel.tsx"

function App() {
  
   
   
  return (
    <BrowserRouter>
      
      <Header    />
     
      <Routes>
        
          <Route path="/" element={<AboutMe />} />
          <Route path="/home" element={<Gallery />} />
          <Route path="lunafon" element={<GalleryLunafon />} />
          <Route path="/pixel" element={<GalleryPixel />} />
           
          
          
           
          <Route
            
            path=":siteId/:userId"
             
          element={<RenderPagePixel   />}/>  
      </Routes>
     
    </BrowserRouter>
  )
}

export default App
