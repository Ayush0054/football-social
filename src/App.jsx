import { useState } from 'react'
//  import {Supabase} from './config/supabaseClient.js'
import './App.css'
// import Aaf from './components/aaf/aaf'
import Navbar from './components/navbar/navbar'
// import News from './components/highlights/highlights.jsx'
import Highlights from './components/highlights/highlights.jsx'
import Home from './components/home/home'
import { Routes,Route } from 'react-router-dom'
import Post from './components/post/post'
function App() {

  return (
    <div className="App">
 
     <Navbar/>

     {/* <Home/> */}
     {/* <Highlights/> */}
     <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="highlights" element={ <Highlights/> } />
        <Route path="post" element={ <Post/> } />
      </Routes>
    </div>
  )
}

export default App
