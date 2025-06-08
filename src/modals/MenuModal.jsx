import { X } from "lucide-react"
const MenuModal = ({ isOpen, setMenuOpen }) => {
    return (
        <div 
            className={`fixed inset-0 bg-black transition-all duration-300 z-50 bg-opacity-50 visible `}
            onClick={(e) => {
                if (e.target === e.currentTarget) setMenuOpen(false)
            }}
        >
            <div className={`fixed top-0 right-0 bottom-0 left-1/2 bg-blue-200 transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <button 
                    onClick={() => setMenuOpen(false)} 
                    className="absolute top-2 right-2 p-2 hover:bg-blue-400 rounded-full transition-colors duration-200"
                >
                    <X className="h-5 w-5" />
                </button>
                
               
                <div className="flex flex-col space-y-6 px-6 pt-16 text-base font-bold">
                    <p className="hover:text-blue-700 cursor-pointer transition-colors">Music</p>
                    <p className="hover:text-blue-700 cursor-pointer transition-colors">Podcast</p>
                    <p className="hover:text-blue-700 cursor-pointer transition-colors">Live</p>
                    <p className="hover:text-blue-700 cursor-pointer transition-colors">Radio</p>
                </div>
            </div>
        </div>
    )
}

export default MenuModal