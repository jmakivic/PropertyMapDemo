import * as React from 'react';
import './App.css';
import {HousingComponent} from './HousingComponent';
import {Housing} from './contexts/Housing';
import {AllHousingMarkers} from './AllHousingMarkers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faThumbTack , faCircleChevronDown, faSliders, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

function App() {

    const listItems = Housing.map((number) =>
      <HousingComponent id={number.id} title={number.info.title} price={number.info.price} description={number.info.description} />
    );


  return (
    <div className="App">
      <div className="content">
        <h1> <FontAwesomeIcon icon={faThumbTack}/> Properties To Rent in Wonderland</h1>
        <div className="map-section">
          <div className="map-nav">
            <h4>Search: </h4>
            <div className="textarea">Wonderland, Universe</div>
            <div className="distance">
              <div><p>2</p></div><div><p>km</p></div>
            </div>
            <div className="navSection" style={{"width":"100px","textAlign":"center","backgroundColor":"#f0f0f0"}}><FontAwesomeIcon icon={faMagnifyingGlass}/> Search</div>
            <p>Filter Search:</p>
            <div className="navSection">£750-£8330pm <FontAwesomeIcon icon={faCircleChevronDown}/></div>
            <div className="navSection">Shared House, Studio <FontAwesomeIcon icon={faCircleChevronDown}/></div>
            <div className="navSection"><FontAwesomeIcon icon={faSliders}/> Advanced Filter</div>
          </div>
          <div className="map-area">s
            <AllHousingMarkers />
          </div>
        </div>
        <div className="listings">{listItems}</div>
     

      </div>
    </div>
  );
}

export default App;
