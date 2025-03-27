// Main function : we are calling the component in this display section and it act as a main function

import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {
  const displayRef = useRef();
  // useLocation()to return the URL of the current location
  const location= useLocation();
  // to search the string contains album on the url and provide true or false
  const isAlbum = location.pathname.includes("album");
  //  checks if the isAlbum is true stores the location pathname.slice (-1) or empty into albumID 
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  // we are provind the bg to the albumsData for the we need album id so calling it from albumsData coverting the string albumId into number and calling the property bgcolor.
  const bgColor = albumsData[Number(albumId)].bgColor;
  // useEffect checks the isalbum is true and apply the background color according to the bgcolor or else apply the default color mention below.
  useEffect(()=>{
    if (isAlbum){
      // gradient gives us two shades to use one is bgcolor, next is deafult one used for the common.
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`
    }
    else{
      displayRef.current.style.background = `#121212`
    }
  })

  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[80%] ml-0'>
        <Routes>
          {/* route to the location about where it has to go when it is clicked */}
            <Route path='/' element={<DisplayHome/>}> </Route>
            {/* we are navigating from the display home to the display album and to connect with id for further purpose */}
            <Route path='/album/:id' element={<DisplayAlbum/>}> </Route>
        </Routes>
    </div>
  )
}

export default Display