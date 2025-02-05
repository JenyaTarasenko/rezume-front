import React from 'react';
import './style.css';


const ButtonSection = ({ text, onClick, textClassName })=>{
    text = "Write me"

    return(

        <div className="home-button">

            <button className={`home-btn ${ textClassName|| ''}`} onClick={onClick}> {text}</button>
                   
        </div>

    );
}

export default ButtonSection;