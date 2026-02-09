import { Routes,Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import User from "./User";
import Navbar from "./Components/Navbar";
function App(){
  return(
    <> 
    <Navbar/>

  <Routes>
    
    <Route path="/" element={<Home/>}/>
    <Route path="user" element={<User/>}/> 
    <Route path="about" element={<About/>}/>
  </Routes>
</>
  )
}

export default App;