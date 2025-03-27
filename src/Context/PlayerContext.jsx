import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";
// The useContext hook in React is a powerful tool for managing and sharing state or data across components without the need to pass props manually through every level of the component tree. 
// It's often used in combination with React's Context API to create a global state that can be accessed by any component in your application.
// 1. create context()
export const PlayerContext = createContext();

// 3.Consume the Context Using useContext: The useContext hook allows a component to "consume" the context and access its value directly. check player,songitem.
const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    
    // default track will be given inside the parameter of usestate
    const[track,setTrack] = useState(songsData[0]);
    //  if the song is paused the usestate will be false as default.
    const [playStatus,SetPlayStatus] = useState(false);
    const [time,SetTime] = useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })

    const play = () => {
        audioRef.current.play();
        // set the icon as per ternaray condition if it is true it show play icon if false pause icon
        SetPlayStatus(true);
    }
    const pause = () => {
        audioRef.current.pause();
        SetPlayStatus(false);
    }

    const playWithId = async (id) => {
        // it set the track with songData id  and the current will play automatically.
        await setTrack(songsData[id]);
        await audioRef.current.play();
        SetPlayStatus(true);
    }

    const previous = async() =>
    {
        if (track.id > 0)
        {
        // it will do the below function  previous= track.id -1;j
           await setTrack(songsData[track.id-1]);
        //    plays the track with auto play()
           await audioRef.current.play();
           SetPlayStatus(true);
        }
    }
    const next = async() =>
        {
            if (track.id < songsData.length-1)
            {
            // it will do the below function  previous= track.id -1;j
               await setTrack(songsData[track.id+1]);
            //    plays the track with auto play()
               await audioRef.current.play();
               SetPlayStatus(true);
            }
        }

    const seekSong = async (event)=>
    {
        audioRef.current.currentTime = ((event.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration);
        await audioRef.current.play();
        SetPlayStatus(true);
        // console.log(event) offset:286
    }

    useEffect (()=> {
        setTimeout(() =>{
            audioRef.current.ontimeupdate= () => {
                // (current time / current duration)*100 will give percentage and it sets the width(in %) of the seekbar finally followed by "%" to make it a valid CSS width..
                // mathfloor used to round of the number
                seekBar.current.style.width = (Math.floor (audioRef.current.currentTime / audioRef.current.duration *100))+ "%";

                SetTime({
                    currentTime:{
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute:Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime:{
                        second: Math.floor(audioRef.current.duration % 60),
                        minute:Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        })
    })
// passisng the components via props.children so no need to work manually.
    const contextValue ={
        audioRef,
        seekBar,
        seekBg,
        track,setTrack,
        playStatus,SetPlayStatus,
        time,SetTime,
        play,pause,
        playWithId,
        previous,
        next,
        seekSong

    }
    // 2.provide a value:Use the Provider component of the context to "provide" a value to the components wrapped in it. This makes the value accessible to any child component that consumes the context.
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}
export default PlayerContextProvider;