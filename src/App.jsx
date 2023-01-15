import { useEffect, useState } from 'react'
import { supabase } from './lib/client'
// import { SupabaseClient } from '@supabase/supabase-js'
import './App.css'
import Navbar from './components/navbar/navbar'
import Highlights from './components/highlights/highlights.jsx'
import Home from './components/home/home'
import { Routes,Route } from 'react-router-dom'
import Post from './components/post/post'
import Login from './components/login/login'
import Registration from './components/registeration/registration'
function App() {

 const [token, setToken] = useState(false)

 if(token){
   sessionStorage.setItem('token',JSON.stringify(token))
 }

 useEffect(() => {
   if(sessionStorage.getItem('token')){
     let data = JSON.parse(sessionStorage.getItem('token'))
     setToken(data)
   }
   
 }, []) 
  return (
    <div className="App">
      
     <Navbar/>
     <Routes>
        <Route path="/" element={ <Home/> } />
      <Route path="/login" element={ <Login setToken={setToken} /> } />
      <Route path="/register" element={ <Registration/> } />
      </Routes>
      {token ? 
      <Routes>   
        <Route path="post" element={ <Post token={token} /> } />
        <Route path="highlights" element={ <Highlights token={token} />  } />
     </Routes>
     :""}
    </div>
  )
}

export default App
