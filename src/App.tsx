

import './App.css'
import SignIn from './components/functionals/SignIn'
import { Routes, Route } from "react-router-dom"
import SignUp from './components/functionals/SignUp'
import Home from './components/functionals/Homepage'

function App() {

  return (
    <>
        <Routes>
        <Route path="/" element={ <SignUp/> } />
        <Route path="/sign-in" element={ <SignIn/> } />
        <Route path="/home" element={ <Home/> } />

        

      
      </Routes>
     
    </>
  )
}

export default App
