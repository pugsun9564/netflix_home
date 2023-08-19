import React from 'react';
import data from '../datas/rankvideolist.json';
import { useRecoilState } from 'recoil';
import { popupState } from '../recoil/Popup';
import { scrollState } from '../recoil/Scroll';

function Item(props) {
  const [popup, setPopup] = useRecoilState(popupState);
  const [scroll, setScroll] = useRecoilState(scrollState);

  const handlePopup = () => {
    setScroll(window.pageYOffset);
    window.scrollTo(0, 0);
    return setPopup(!popup);
  };
  return (
    <div className="rank-item" onClick={handlePopup}>
      <div className="title-card-container">
        <div className="title-card">
          <div className="content">
            <a>
              <div className="box-container">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="20 0 70 154"
                  className={props.num}
                >
                  <path
                    stroke="#595959"
                    strokeLinejoin="square"
                    strokeWidth="4"
                    d={props.d}
                  ></path>
                </svg>
                <img src={props.src}></img>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function rankitem(props) {
  const type = props.name;
  let list = data.filter((item) => type === item.id);
  return list.map((item, index) => {
    return <Item key={index} src={item.src} d={item.d} num={item.n}></Item>;
  });
}
