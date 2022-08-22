import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./routes/home";
import Game from "./routes/game";

function App() {
  return (
    <div> 
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/game" element={<Game />} />
         </Routes>   
      </BrowserRouter>
    </div>
  )
}

export default App
