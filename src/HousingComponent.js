import * as React from 'react';
import './App.css';
import {Housing} from './contexts/Housing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

//DO favorites, etc here. How about the other things associated with this component
export function HousingComponent(props){

      //make it specific to the item
  const [favorite, setFavorite] = React.useState(Housing[props.id].info.favorite);
  const [visited, setVisited] = React.useState(Housing[props.id].info.viewed);
  const [dismiss, setDismissed] = React.useState(Housing[props.id].info.dismiss);

  /*These should determine the color of the marker?*/
  const chooseFavorite =()=>{
    console.log(props.title + favorite);
    Housing[props.id].info.favorite = !favorite;
    setFavorite(!favorite);
    
    

    console.log("Housing fav: "+Housing[props.id].info.favorite);
  }

  const markVisited =()=>{
    console.log(props.title + visited);
    Housing[props.id].info.viewed = !visited;
    setVisited(!visited);
  }

  const markDismissed =()=>{
    console.log(props.title + dismiss);
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

