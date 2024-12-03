import React from 'react'
import {Blog, Contact, Home, Navbar} from './components'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>

    </>
  )
}
