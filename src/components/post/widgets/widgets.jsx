import React from 'react'
import "./widgets.css"
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
function Widgets() {
  return (
     <div className="widgets">

    <div className='widget'>
     <div className='top-players'>

    <div className='players'>
       <SportsSoccerIcon/>
       <h3 className='player-text'>top players of the day</h3>
    </div>
    <div className='player-names'>
       <h4 className='playernames-text'># Erling Haaland</h4>
       <h4 className='playernames-text'># Marcus Rashford</h4>
       <h4 className='playernames-text'># Kylian Mbappe</h4>
    </div>
     </div>
      
    </div>
     </div>
  )
}

export default Widgets
