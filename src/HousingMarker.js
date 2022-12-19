import * as React from 'react';
import './App.css';

export function HousingMarker(props){

    return(
        <div className="marker" >
            <div>
                {props.show ? <img src={require("./images/housingIcon_orig.png")} style={{"position":"absolute","left":props.xpos,"top":props.ypos,"zIndex":50}}/> : " "}
                {props.favorite ? <img src={require("./images/favorite.png")} style={{"position":"absolute","left":props.xpos,"top":props.ypos,"zIndex":100}}/> : " "}
                {props.viewed ? <img src={require("./images/housingIcon_viewed.png")} style={{"position":"absolute","left":props.xpos,"top":props.ypos,"zIndex":70}}/> : " "}
                {props.dismiss ? <img src={require("./images/dismiss.png")} style={{"position":"absolute","left":props.xpos,"top":props.ypos,"zIndex":200}}/> : " "}
               
            </div>
        </div>
    );
}