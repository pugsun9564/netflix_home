import React from 'react';

import { useRecoilState } from 'recoil';
import { popupState } from '../recoil/Popup';
import { scrollState } from '../recoil/Scroll';
import data from '../datas/videolist.json';
import Slider from 'react-slick';
import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Styled_Slider = styled(Slider)`
  .slick-prev {
    left: -45px;
  }
  .slider-show {
    padding: 0 60px;
  }
  .slick-prev:before,
  .slick-next:before {
    font-family: 'slick';
    font-size: 40px;
    line-height: 1;
    opacity: 0.75;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }
`;

function F(props) {
  const [popup, setPopup] = useRecoilState(popupState);
  const [scroll, setScroll] = useRecoilState(scrollState);

  const handlePopup = () => {
    setScroll(window.pageYOffset);
    window.scrollTo(0, 0);
    return setPopup(!popup);
  };
  return (
    <div
      className="title-card"
      style={{
        padding: '0 0.2rem',
      }}
      onClick={handlePopup}
    >
      <div className="contents">
        <div className="box-container">
          <img src={props.src} alt='img'></img>
        </div>
      </div>
    </div>
  );
}

export default function slideritem(props) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  const type = props.name;
  let list = data.filter((item) => type === item.id);
  return (
    <div>
      <Styled_Slider className="slider-item" {...settings}>
        {list.map((item) => {
          return <F key={item.src} src={item.src}></F>;
        })}
      </Styled_Slider>
    </div>
  );
}
