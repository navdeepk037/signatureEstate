import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import About from './pages/About.jsx'
import Profile from './pages/Profile'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
export default function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
      <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
      <Route path="/about" element={<About></About>}></Route> 
      <Route element={<PrivateRoute></PrivateRoute>}>
      <Route path="/profile" element={<Profile></Profile>}></Route>
      </Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  )
}
