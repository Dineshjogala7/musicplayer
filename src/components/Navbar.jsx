import { Menu, Search } from "lucide-react"
import MenuModal from "../modals/MenuModal"
import { useState } from "react"
import axios from "axios"

const Navbar=({music,setMusic})=>{
    const [menuOpen,setMenuOpen]=useState(false)
    const handleMenu=()=>{
        setMenuOpen(!menuOpen)
    }
    const [Data,setData]=useState('');
    const handleSubmit= async ()=>{
        try {
            const response = await axios.get('https://itunes.apple.com/search', {
                params: {
                    term: Data,
                    media: 'music',
                    limit: 10
                }
            });
            
            setMusic(response.data.results);
        } catch (error) {

            console.log(error);
            setMusic("error")
        }
        setData('');
    
    }
    return(
        <header className="top-0 sticky left-0 right-0 bg-slate-400 z-50">
            {console.log('navbar added')}
            <div className="max-w-7xl mx-auto ">
                <div className="flex items-center justify-between md:py-6 sm:py-4 px-4 py-3">
                    <div>
                        <h3 className="text-lg font-serif font-bold ">gAAna</h3>
                    </div>
                    <nav className="md:flex md:space-x-8  space-x-4 font-serif hidden transition ">
                        {["Music", "Podcast", "Live", "Radio"].map((item) => (
                            <p key={item} className="hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                            {item}
                            </p>
                        ))}
                    </nav>
                    <div className="relative flex-1 max-w-sm md:max-w-md  mx-4">
                        <input 
                            type="text" 
                            placeholder="Search..."
                            className="outline-none ring-0 py-2 pr-10 pl-3 rounded-md font-sans text-sm w-full hover:outline-1 hover:outline-blue-200"
                            onChange={(e)=>setData(e.target.value)}
                            value={Data}
                            onKeyDown={(e)=>{
                                if(e.key==='Enter'){
                                    handleSubmit()
                                }
                                else{
                                    return
                                }
                            }}/>
                        <button onClick={handleSubmit} className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:text-blue-500">
                            <Search className="h-4 w-4"/>
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button onClick={handleMenu}><Menu /></button>
                    </div>
                </div>
                {
                    menuOpen &&(<MenuModal isOpen={menuOpen} setMenuOpen={setMenuOpen}/>)
                }
            </div>
        </header>
    )
}

export default Navbar