import React, { useState } from 'react';  
import item from '../datas/epidata.json'


function Item(props) {
  const [isover, setIsOver] = useState(0);

  function Avail() {
    return (
      <div className="avail">
        <span>{props.avail}</span>
      </div>
    );
  }

  return (
    <div
      className={'epi-item ' + (props.release === 'no' ? 'disabled' : '')}
      onMouseOver={() => setIsOver(1)}
      onMouseOut={() => setIsOver(0)}
    >
      <div className="epi-title-index">{props.index}</div>
      <div className="epi-imgWrapper">
        <div>
          <img src={props.src}></img>
        </div>
        <div className="play-icon">
          {isover ? (
            <svg viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
              ></path>
            </svg>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="epi-metadataWrapper">
        <div className="epi-card-title">
          <span className="card-title-text">{props.title}</span>
          <span>
            <span className="card-duration">{props.duration}</span>
          </span>
        </div>
        <div className="card-synopsis">
          <div>{props.synopsis}</div>
        </div>
        {props.release === 'no' ? <Avail></Avail> : ''}
      </div>
    </div>
  );
}

export default function episodeitem(props) {
  const list = item['이상한 변호사 우영우'];
  const firstlist = list.filter((l) => l.index < 11);

  let lastlist;

  const clicks = props.clickstate;

  {
    clicks ? (lastlist = list) : (lastlist = firstlist);
  }

  return lastlist.map((item) => {
    return (
      <Item
        key={item.index}
        avail={item.avail}
        release={item.release}
        index={item.index}
        src={item.src}
        title={item.title}
        duration={item.duration}
        synopsis={item.synopsis}
      ></Item>
    );
  });
}
