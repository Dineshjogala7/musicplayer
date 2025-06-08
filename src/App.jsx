import { useState } from "react"
import Navbar from "./components/Navbar"
import Centre from "./components/Centre";
const App=()=>{
  const [music,setMusic]=useState([]);
  return(
    <div className="min-h-screen ">
      
      {console.log('app jsx addd')}
      <Navbar music={music} setMusic={setMusic}/>
      <Centre music={music}/>
    </div>
  )
}

export default App