import React from "react"; 
  
const Song = ({ currentSong }) => { 
    return ( 
        <div className="song-container"> 
            <h2>{currentSong.name}</h2> 
        </div> 
    ); 
}; 
  
export default Song; 