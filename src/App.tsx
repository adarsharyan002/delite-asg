

import './App.css'
import SignIn from './components/functionals/SignIn'
import { Routes, Route } from "react-router-dom"
import SignUp from './components/functionals/SignUp'
import Home from './components/functionals/Homepage'
import EmailVerified from './components/functionals/auth/EmailVerified'
import EmailSent from './components/functionals/auth/EmailSent'

function App() {

  return (
    <>
        <Routes>
        <Route path="/" element={ <SignUp/> } />
        <Route path="/sign-in" element={ <SignIn/> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="/verify-email/:token" element={ <EmailVerified/> } />
        <Route path="/email-sent" element={ <EmailSent/> } />


      </Routes>
     
    </>
  )
}

export default App
