import React, { useContext } from 'react'

import { PlayerContext } from '../Context/PlayerContext'

const SongItem = ({name,image,desc,id}) => {
  // Consume the Context Using useContext: The useContext hook allows a component to "consume" the context and access its value directly. created in playercontext
  const {playWithId} = useContext(PlayerContext)

  return (
    <div onClick={()=>playWithId (id)} className='min-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded' src={image} alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItem