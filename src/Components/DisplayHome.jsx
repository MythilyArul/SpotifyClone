import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets' // it is from assests.js so should be in {}
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'
import SongItem from './SongItem'
const DisplayHome = () => {
  return (
    <>
    <Navbar/>
    <div className='mb-4' >
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        {/* overflow provide the scroll bar if the screen size shrinks so we are hiding it in index.css file  if we dont use overflow the albumitem will be extended accros the displayhome*/}
        <div className='flex overflow-auto'>    
          {/* here the name, desc, id, image are from props in albumItem then we are assising the item.name item.desc item.id from the albumsData to the AlbumItem that will carry the props*/}
            {albumsData.map((item,index) =>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>) )}
        </div>
        {/* setting props for array using key map index */}
       
    </div>
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hit</h1>
        {/* overflow provide the scroll bar if the screen size shrinks so we are hiding it in index.css file  if we dont use overflow the albumitem will be extended accros the displayhome*/}
        <div className='flex overflow-auto'>    
            {songsData.map((item,index) =>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>) )}
        </div>
        {/* setting props for array using key map index */}
       
    </div>
    </>
  )
}

export default DisplayHome