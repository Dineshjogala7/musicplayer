import { useEffect, useState } from "react"
import empty from '../assets/empty.png'
import { Search } from "lucide-react";

const Centre=({music})=>{
    const [select,setSelect]=useState(false);
    const [selectedIndex,setSelectedIndex]=useState(0);  // ✅ Fixed variable name
             
    return(
        <section className="md:pt-20 pt-16 mx-auto w-full max-w-7xl flex-grow min-h-[80vh] md:px-16 px-4 bg-gradient-to-r bg-slate-100 md:pb-8 pb-4">
            {select && music && music[selectedIndex] && (  // ✅ Added safety checks
                <div className="w-full px-6 py-8 rounded-lg bg-cover bg-center flex flex-col justify-around items-center md:h-[400px] h-[250px] z-10 shadow-lg shadow-[gray-500]"
                    style={{ backgroundImage: `url(${music[selectedIndex].artworkUrl100})` }}>
                                         
                    <div ><audio src={music[selectedIndex].previewUrl} controls className="z-20"/></div>
                    <div className="text-white font-bold md:text-4xl text-lg">{music[selectedIndex].artistName}</div>
                </div>
            )}
            {music && Array.isArray(music) && music.length > 0 && (  // ✅ Fixed condition
                <div className="mt-10 flex flex-col md:space-y-6 space-y-4" >
                {music.map((dat,mapIndex)=>(  
                    <div key={dat.trackId || mapIndex} onClick={()=>{setSelect(true)
                        setSelectedIndex(mapIndex)  // ✅ Fixed variable reference
                    }} className="bg-white flex py-2 px-4 items-center justify-between rounded-md shadow-md hover:-translate-y-2 hover:md:scale-105  duration-300 hover:z-10">
                         <div className="flex md:space-x-8 space-x-4 items-center">
                            <p className="text-lg font-bold">#{mapIndex+1}</p>
                        <div className="rounded-md">
                            <img src={dat.artworkUrl100} alt="" className="md:w-[70px] md:h-[70px] object-cover object-center h-[40px] w-[40px]" />
                        </div>
                         </div>
                         <p className="text-sm md:text-lg text-wrap">{dat.collectionArtistName|| 'NO AUTHOR'}</p>
                        <p className="text-sm md:text-lg text-wrap">{dat.trackName}</p>
                     </div>
                ))}
                </div>
            )}
            {
                 (!music || music==='error' || (Array.isArray(music) && music.length === 0)) && (  // ✅ Improved condition
                    <div>
                        
                        <Search className="mt-20 mx-auto h-[110px] w-[110px]"/>
                    </div>
                )
            }
        </section>
    )
}

export default Centre