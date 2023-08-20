import React from 'react'

import RankItem from './rankitem';
import SliderItem from './slideritem'
import './cards.css'

export default function cards(props) {
  const type = props.name;
  const name = props.className;

  function videos() {
    // if (name === 'rank') {
    //   return <RankItem name={type}></RankItem>;
    // } 
      return <SliderItem name={type}></SliderItem>;
    
  }

  return (
    <div className="card">
      <h2 className="card-header">
        <a className="card-title" >
          <div className="row-header-title">{type}</div>
        </a>
      </h2>
      <div className="card-row-container">
        <div className="track-container">
          <div className="slider">
            <div className="slider-show">{videos()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
