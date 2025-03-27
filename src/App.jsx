import React, { useContext } from 'react'
import Sidebar from './Components/Sidebar'
import Player from './Components/Player'
import Display from './Components/Display'
import { PlayerContext } from './Context/PlayerContext'

const App = () => {
  const {audioRef, track} = useContext(PlayerContext)
  return (
    <div className='h-screen bg-black' >
      <div className='h-[90%] flex '>
        {/* as sidebar and player will be visible on all the pages we have used the component here */}
        <Sidebar/>
        <Display/>
      </div> 
      <div>
        <Player/>
        {/* we will get the song file */}
        <audio ref={audioRef} src={track.file} preload='auto'> </audio>
      </div>
      
    </div>
  )
}

export default App