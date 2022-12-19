/*This code determines what type of housing markers there are and where they belong on the map according to the data in the Housing object*/
import * as React from 'react';
import './App.css';
import {Housing} from './contexts/Housing';
import {HousingMarker} from './HousingMarker';

export function AllHousingMarkers(){

    const [showAll, setShowAll] = React.useState(false);
    const [showFavorites, setShowFavorites] = React.useState(false);
    const [showViewed, setShowViewed] = React.useState(false);
    const [showDismissed, setShowDismissed] = React.useState(false);

    let AllMarkers = Housing.map((number) =>
    <HousingMarker id={number.id} xpos={number.info.xpos} ypos={number.info.ypos} show={true}/>);

    let Viewed = Housing.map((number) =>{
        if(number.info.viewed){
            return <HousingMarker id={number.id} viewed={number.info.viewed} xpos={number.info.xpos} ypos={number.info.ypos}/>
        }else{
            return <></>;
        }
    });
    
    let Favorites = Housing.map((number) =>{
        if(number.info.favorite){
            return <HousingMarker id={number.id} favorite={number.info.favorite} xpos={number.info.xpos} ypos={number.info.ypos}/>
        }else{
            return <></>;
        }
    });

    let Dismissed = Housing.map((number) =>{
        if(number.info.dismiss){
            return <HousingMarker id={number.id} xpos={number.info.xpos} ypos={number.info.ypos} dismiss={number.info.dismiss}/>
        }else{
            return <></>;
        }
    });

    return(
        <div className="mapToggle">
            <button className={showAll ? "selected":" "} onClick={()=>setShowAll(!showAll)}>
                SHOW ALL
            </button>
            <button className={showFavorites ? "selected":" "}onClick={()=>setShowFavorites(!showFavorites)}>
                FAVORITES
            </button>
            <button className={showViewed ? "selected":" "} onClick={()=>setShowViewed(!showViewed)}>
                ALREADY VIEWED
            </button>
            <button className={showDismissed ? "selected":" "} onClick={()=>setShowDismissed(!showDismissed)}>
                DISMISSED
            </button>
            <div>{showAll ? AllMarkers: <></>}</div>
            <div>{showFavorites ? Favorites: <></>}</div>
            <div>{showViewed ? Viewed : <></>}</div>
            <div>{showDismissed ? Dismissed : <></>}</div>    
        </div>
    );
}