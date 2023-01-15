import React, { useEffect, useState } from 'react'
import NotesIcon from '@mui/icons-material/Notes';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import "./feed.css"
import { supabase } from '../../../lib/client';
import FlipMove from 'react-flip-move';
import { motion } from "framer-motion";
function Feed({token}) {
  const [image,setImage] = useState("");
  const [input , setInput] = React.useState("")
  const [post,setPost] = React.useState([])
  //supabase
  const [formError, setFormError] = useState(null)
  const [fetchError , setFetchError] = useState(null)
  const [opinion,setOpinion] = useState([]);

  useEffect(()=>{
     const fetchOpnion = async() =>{
        const {data,error} = await supabase
        .from("opinion")
        .select()
        .order('id', { ascending: false })
        console.log(data,"hi");
        if(error){
          setFetchError("could not fetch the opnion")
          setOpinion(null)
          console.log(error);
        }
        if(data){
          setOpinion(data)
          setFetchError(null)
        }
     }
     fetchOpnion()
     
    })
   const sendOpinion = async(e) =>{
      e.preventDefault();
      const { data, error } = await supabase
      .from('opinion')
      .insert({ content:input,images:image })
      // .select()
      if (error) {
        console.log(error)
        setFormError('Please fill in all the fields correctly.')
      }
      if (data) {
        console.log(data)
        // setOpinion(data)
        setFormError(null)
        // navigate('/post')
      }
      setInput("");
      setImage("")
      // fetchOpnion()
    }
    
  return (
    <div className="main-area">

    <div className='post'>
    <form action='/post' onSubmit={sendOpinion} >
    <div className="ip">
    <NotesIcon/>
     <textarea type="text" value={input} onChange={e =>setInput(e.target.value)} rows='5' cols="40"   />
    </div>
     <div className="ip2">
    <InsertPhotoIcon/> 
     <input className='photo'  type='link'  value={image} placeholder="image link"  onChange={((e)=> setImage(e.target.value))}></input>
     <button type='submit' className='submit'  >post</button>
     </div>
     {formError && <p className="error">{formError}</p>}
    </form>
    </div>
    {/* user post */}

    {fetchError && (<h3>{fetchError}</h3>)}
      {opinion && ( 
         <div className="idk">
         {/* <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        default: {
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
        },
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
    > */}
        <FlipMove>

          {opinion.map((masti) => {
         return  <div className="main-content" key={masti.id}>
           {/* <h2>{token.user.user_metadata.Name}</h2>  */}
         <div className="all-contents">
       <h3 className='para' key={masti.id}>{masti.content}</h3>
        <img className='content-image' src={masti.images} alt="messi" key={masti.id} />
         </div>
         </div>
          })}
        </FlipMove>
          {/* </motion.div> */}
         </div>
      )}

    </div>
  )
}

export default Feed
