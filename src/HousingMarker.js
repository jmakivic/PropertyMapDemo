/*This code defines the image used to represent each type of housing marker for generic, favorited, dismissed, and viewed properties*/
import * as React from 'react';
import './App.css';

export function HousingMarker(props){

    return(
        <div className="marker" >
            <div>
                {props.show ? <img alt="blue housing icon" src={require("./images/housingIcon_orig.png")} style={{"position":"absolute","left":props.xpos,"top":props.ypos,"zIndex":50}}/> : " "}
                {props.favorite ? <img alt="golden star favorited icon" src={require("./images/favorite.png")} style={{"position":"absolute","left":props.xpos,"top":props.ypos,"zIndex":100}}/> : " "}
                {props.viewed ? <img alt="purple viewed housing icon" src={require("./images/housingIcon_viewed.png")} style={{"position":"absolute","left":props.xpos,"top":props.ypos,"zIndex":70}}/> : " "}
                {props.dismiss ? <img alt="red x dismissed icon" src={require("./images/dismiss.png")} style={{"position":"absolute","left":props.xpos,"top":props.ypos,"zIndex":200}}/> : " "}
               
            </div>
        </div>
    );
}