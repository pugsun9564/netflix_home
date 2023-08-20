import React from 'react';
import './banner.css';
import { BsPlayFill, BsExclamationCircle } from 'react-icons/bs';

export default function banner() {
  return (
    <div className="banner-container">
      <div className="banner-info">
        <div className="logo-and-text">
          <div className="title-wrapper">
            <div className="banner-title">
              <img
                className="title-img"
                alt="title-img"
                src="https://occ-0-395-325.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABWd4eqTAk5pbxuxP8cbpd_aNKktuWOOt3jfHbaQvuuwEjrJg2Cc0h6TKIxJERBygZ-dGX2Nc1VME6dyavsZ899O-q2-dvkEjBWeSoPwBlcPI.webp?r=149"
              ></img>
            </div>
          </div>
          <div className="info-wrapper">
            <div className="info-wrapper-fade">
              <div className="message">매주 목요일 새로운 에피소드 공개</div>
              <div className="description-fade">
                <div className="description">
                  공개 투표를 통해 악질범들의 사형을 집행하는 정체불명의 인물이
                  나타났다. 살인범을 추척하기 위해 공조하는 두 경찰과 수감자.
                  너무 늦기 전에 놈을 잡아야 한다
                </div>
              </div>
            </div>
          </div>
          <div className="banner-btn">
            <div className="playBtn">
              <BsPlayFill />재생
            </div>
            <div className="moreBtn">
              <BsExclamationCircle />상세 정보
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
