import React from 'react'
import { useNavigate } from 'react-router-dom'
// using props in js so it required{} we can use either(props) in AlbumItem and then calling in props.name in p tags. or we can name it directly in ({}) inside this paranthesis.
// This file use to export the featured charts content to the displayhome
const AlbumItem = ({image,name,desc,id}) => {
  const navigate = useNavigate()
  return (
    // id will be reflected on the url we are naming it as album
    <div onClick={()=> navigate(`/album/${id}`)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded' src={image} alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        {/* text sm- for captions readaiblity  */}
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default AlbumItem