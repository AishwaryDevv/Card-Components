import React from 'react';
import "./Usercard.css"; 
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const Usercard =(props) => {
    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer">
        <div className= 'user-container' style={props.style}>
            <p id ="user-name">{props.name}</p>
            <img id ="user-img" src={props.image} alt={props.name} ></img>
            <p id ="user-desc" >{props.desc}</p>
        </div>
        </a>
    )
}

export default Usercard;