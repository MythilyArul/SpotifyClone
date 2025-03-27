import React from 'react'
import{assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
   const navigate = useNavigate();
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        {/* to define the felx box with light shade */}
        <div  className='bg-[#121212] h-[15%] rouned flex flex-col justify-around '> 
            <div onClick={()=> navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer '>
                {/* inserting image from assests component and sizing the img */}
                <img className='w-6' src={assets.home_icon} alt="" />
                <p className='font-bold'>Home</p>
            </div>

            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                {/* inserting image from assests component and sizing the img */}
                <img className='w-6' src={assets.search_icon} alt="" />
                <p className='font-bold'>Search</p>
            </div>
        </div>
        {/* to make the outer box look rounded */}
        <div className='bg-[#121212] h-[85%] rounded'>
            {/* to define the felx box with item center and justfiy */}
            <div className='p-4 flex items-center justify-between'>
                {/* gap used to give space between the img and paragraph as well as goes with arrow and plus*/}
                <div className='flex items-center gap-3'>
                    <img className='w-8' src={assets.stack_icon} alt="" />
                    <p className='font-semibold'>Your Library</p>
                </div>
                <div className='flex items-center gap-3'>
                    <img className='w-5' src={assets.arrow_icon} alt="" />
                    <img className='w-5' src={assets.plus_icon} alt="" />
                </div>
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
                <h1>Create your first playlist</h1>
                <p className='font-light'>It's easy we will help you</p>
                <button className='px-5 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                <h1>Let's findsome podcasts to follow</h1>
                <p className='font-light'>We 'll keep you update on new episodes</p>
                <button className='px-5 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcasts</button>
            </div>
        </div>
        
    </div>
  )
}

export default Sidebar