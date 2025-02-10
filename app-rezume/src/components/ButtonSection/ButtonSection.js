import React from 'react';
import './style.css';


const ButtonSection = ({ text, onClick, textClassName })=>{
    text = "Write me"

    return(

        <div className="home-button">

            <a href="https://t.me/jenyatarasenko" target="_blank" rel="noopener noreferrer"><button className={`home-btn ${ textClassName|| ''}`} onClick={onClick}> {text}</button></a>
                   
        </div>

    );
}

export default ButtonSection;