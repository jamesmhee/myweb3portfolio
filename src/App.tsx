import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import LayoutTheme from "./components/LayoutTheme"

function App() {

  return (
    <>
      <BrowserRouter>   
        <LayoutTheme>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>          
          </Routes>    
        </LayoutTheme>
      </BrowserRouter>
    </>
  )
}

export default App
