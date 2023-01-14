import { useState } from 'react'
import { supabase } from './lib/client'
// import { SupabaseClient } from '@supabase/supabase-js'
import './App.css'
// import Aaf from './components/aaf/aaf'
import Navbar from './components/navbar/navbar'
// import News from './components/highlights/highlights.jsx'
import Highlights from './components/highlights/highlights.jsx'
import Home from './components/home/home'
import { Routes,Route } from 'react-router-dom'
import Post from './components/post/post'
import Login from './components/login/login'
import Registration from './components/registeration/registration'
function App() {

  return (
    <div className="App">
      
     <Navbar/>
     <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="highlights" element={ <Highlights/> } />
        <Route path="post" element={ <Post/> } />
      </Routes>
      <Routes>   
      <Route path="/login" element={ <Login/> } />
      <Route path="/register" element={ <Registration/> } />
     </Routes>
    </div>
  )
}

export default App
