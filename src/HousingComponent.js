/*This code defines each housing component, or listing viewed under the map. It defines a set of buttons to set the state of that listing
which will then be reflected on the map*/

import * as React from 'react';
import './App.css';
import {Housing} from './contexts/Housing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';


export function HousingComponent(props){

  const [favorite, setFavorite] = React.useState(Housing[props.id].info.favorite);
  const [visited, setVisited] = React.useState(Housing[props.id].info.viewed);
  const [dismiss, setDismissed] = React.useState(Housing[props.id].info.dismiss);

 
  const chooseFavorite =()=>{
    Housing[props.id].info.favorite = !favorite;
    setFavorite(!favorite);

  }

  const markVisited =()=>{
    Housing[props.id].info.viewed = !visited;
    setVisited(!visited);
  }

  const markDismissed =()=>{
    Housing[props.id].info.dismiss = !dismiss;
    setDismissed(!dismiss);
  }

return ( 
    <div className="listing">
       
        <div class="housing">
            <div class="listingImage">
              &nbsp;
            </div>
            <div class="listingContent">
              <div class="listingManagement">
                <div>
                    <button onClick={chooseFavorite}>{favorite ?  <FontAwesomeIcon icon={faStar} color="#f9c953"/>: <FontAwesomeIcon icon={faStar} color="#0086b3"/>}</button>
              
                  </div>
                  <div>
                    <button onClick={markVisited}>{visited ?  <FontAwesomeIcon icon={faEye} color="#a82add"/>: <FontAwesomeIcon icon={faEye} color="#0086b3"/>}</button>
                  
                  </div>
                  <div>
                    <button onClick={markDismissed}>{dismiss ?  <FontAwesomeIcon icon={faEyeSlash} color="#f40f0f"/>: <FontAwesomeIcon icon={faEyeSlash} color="#0086b3"/>}</button>
                  
                  </div>
              </div>
              <p>{props.price} <span style={{"fontSize":"0.8em"}}>per month</span></p>
              <h3>{props.title}</h3>           
              <p className="description">{props.description}</p>
            </div>
        </div>
    </div>
);
}

