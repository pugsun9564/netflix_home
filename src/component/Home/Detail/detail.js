import React, { useState } from 'react';
import './detail.css';
import { useRecoilState } from 'recoil';
import { popupState } from '../recoil/Popup';
import EpiItem from './episodeitem';
// import MoreCardItem from './MoreCardItem';

export default function Detail() {
  const [popup, setPopup] = useRecoilState(popupState);

  const handlePopup = () => {
    setPopup(!popup);
  };

  const [isClick, setIsClick] = useState(false);
  const [isClick2, setIsClick2] = useState(false);

  function AboutTagItem(props) {
    return (
      <div className="about-tag">
        <span style={{ color: '#777' }}>{props.title}</span>
        <span className="about-tag-item">{props.content}</span>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="detail-container">
        <div className="detail-player">
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
            }}
          >
            <img
              src="https://occ-0-395-325.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABT_dD2qXvEsFC1rib_XCik2U0AtUJJdT408uCOyo4sEXpA8uB9YxpJBsjvYLFaaIkruEhFP4SH14-cLESomvGz15794Zdz9lJuHxKvY_tlE8knCfpQg_gqjZepC1by3QyvpgbgodZwpeXvQY6rYQnGQjgonXbRVcL9AiqDLM1tbSsy62UnaCcIiNJQMYSLQ.jpg?r=060"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            ></img>
          </div>
          <div
            style={{
              height: '100%',
              position: 'absolute',
              top: '0',
              width: '100%',
              background: 'linear-gradient(0deg,#181818,transparent 50%)',
            }}
          >
            <div
              style={{
                bottom: '5%',
                left: '3em',
                position: 'absolute',
                width: '40%',
              }}
            >
              <div className="player-name">
                <img
                  src="https://occ-0-395-325.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVkD8YrYl-2u12h1sggHqTWxoPihPeIMoShX3xGCIqEteaxZaovpMGCmmMgwxSOmMNSiWQTT05CkM8WxSdm29apU_lhadWhEC46LUn_GvzeFSmoftzNxLFK6Eu4xorlCLsDoErmSnJMDbuZ5NaxGYIt6NCtRI6D2659B-0LU22-Od88G1xV9.webp?r=801"
                  style={{
                    width: '100%',
                    marginBottom: '1.5em',
                  }}
                ></img>
              </div>
              <div className="player-btncontrol">
                <div className="plus-btn">
                  <button className="btncontrol">
                    <div
                      style={{
                        height: '1.8rem',
                        width: '1.8rem',
                      }}
                    >
                      <svg width={24} height={24} viewBox="0 0 24 24">
                        <path
                          d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                          fillRule="evenodd"
                          fill="#fff"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="like-btn">
                  <button className="btncontrol">
                    <div
                      style={{
                        height: '1.8rem',
                        width: '1.8rem',
                      }}
                    >
                      <svg width={24} height={24} viewBox="0 0 24 24">
                        <path
                          d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z"
                          fillRule="evenodd"
                          fill="#fff"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="vol-control">
              <button className="btncontrol">
                <div
                  style={{
                    height: '1.8rem',
                    width: '1.8rem',
                  }}
                >
                  <svg width={24} height={24} viewBox="0 0 24 24">
                    <path
                      d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM15.2929 9.70714L17.5858 12L15.2929 14.2929L16.7071 15.7071L19 13.4142L21.2929 15.7071L22.7071 14.2929L20.4142 12L22.7071 9.70714L21.2929 8.29292L19 10.5858L16.7071 8.29292L15.2929 9.70714Z"
                      fillRule="evenodd"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="detail-close" onClick={handlePopup}>
          <svg width={24} height={24} viewBox="0 0 24 24">
            <path
              d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z"
              fillRule="evenodd"
              fill="#fff"
            ></path>
          </svg>
        </div>
        <div className="detail-info">
          <div className="detail-container">
            <div className="content-container">
              <div className="detail-content">
                <div className="detail-content-left">
                  <div className="detail-info">
                    <div className="videoMetadata-container">
                      <div className="videoMetadata-first">
                        <span
                          style={{
                            color: '#46d369',
                            whiteSpace: 'unset',
                            maxWidth: '300px',
                            fontWeight: '700',
                          }}
                        >
                          99% 일치
                        </span>
                      </div>
                      <div className="videoMetadata-second">
                        <div className="year" style={{ marginRight: '0.5em' }}>
                          2022
                        </div>
                        <span
                          className="duration"
                          style={{ marginRight: '0.5em' }}
                        >
                          에피소드 16개
                        </span>
                        <span className="player-feature-budge">HD</span>
                        <div className="video-adBadge-container">
                          <div style={{ position: 'relative' }}>
                            <span className="audio-descrption">
                              <svg viewBox="0 0 58.07 24">
                                <path d="M18.34,10.7v7.62l-4.73,0ZM.5,26.6h8l2.17-3,7.49,0s0,2.08,0,3.06h5.7V2.77H17C16.3,3.79.5,26.6.5,26.6Z"></path>
                                <path d="M30.63,8.91c3.6-.13,6.1,1.8,6.48,4.9.5,4.15-2.43,6.85-6.66,6.56V9.19A.26.26,0,0,1,30.63,8.91ZM25,3V26.56c5.78.11,10.22.32,13.49-1.85a12.2,12.2,0,0,0,5.14-11.36A11.52,11.52,0,0,0,33.38,2.72c-2.76-.23-8.25,0-8.25,0A.66.66,0,0,0,25,3Z"></path>
                                <path d="M43.72,3.43c1.45-.4,1.88,1.2,2.51,2.31a18.73,18.73,0,0,1-1.42,20.6h-.92a1.86,1.86,0,0,1,.42-1.11,21.39,21.39,0,0,0,2.76-10.16A22.54,22.54,0,0,0,43.72,3.43Z"></path>
                                <path d="M48.66,3.43c1.43-.4,1.87,1.2,2.5,2.31a18.83,18.83,0,0,1-1.42,20.6h-.91c-.07-.42.24-.79.41-1.11A21.39,21.39,0,0,0,52,15.07,22.63,22.63,0,0,0,48.66,3.43Z"></path>
                                <path d="M53.57,3.43c1.46-.4,1.9,1.2,2.54,2.31a18.58,18.58,0,0,1-1.44,20.6h-.93c-.07-.42.24-.79.42-1.11A21,21,0,0,0,57,15.07,22.26,22.26,0,0,0,53.57,3.43Z"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="detail-rank">
                    <div className="rank-message">
                      <svg viewBox="0 0 24 24">
                        <path
                          d="M3 2C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44772 21.5523 2 21 2H3ZM17.2299 10.8934C16.6125 10.4971 15.8913 10.2996 15.0673 10.2996C14.2444 10.2996 13.5231 10.4971 12.9056 10.8934C12.2881 11.2905 11.8114 11.8536 11.4762 12.5839C11.1411 13.3149 10.9735 14.1695 10.9735 15.1493C10.9735 16.1383 11.1411 16.9957 11.4762 17.7221C11.8114 18.4478 12.2881 19.0091 12.9056 19.4052C13.5231 19.8014 14.2444 20 15.0673 20C15.8913 20 16.6125 19.8014 17.2299 19.4052C17.8475 19.0091 18.3242 18.4478 18.6594 17.7221C18.9945 16.9957 19.1612 16.1383 19.1612 15.1493C19.1612 14.1695 18.9945 13.3149 18.6594 12.5839C18.3242 11.8536 17.8475 11.2905 17.2299 10.8934ZM9.47922 19.7994V10.3263L4.92658 11.4351V13.2656L7.20991 12.6774V19.7994H9.47922ZM13.7606 12.9513C14.0767 12.4298 14.5117 12.1701 15.0673 12.1701C15.6239 12.1701 16.0589 12.4298 16.3751 12.9513C16.6913 13.4718 16.8489 14.2058 16.8489 15.1493C16.8489 16.0938 16.6913 16.8268 16.3751 17.3473C16.0589 17.8688 15.6239 18.1296 15.0673 18.1296C14.5117 18.1296 14.0767 17.8688 13.7606 17.3473C13.4442 16.8268 13.2868 16.0938 13.2868 15.1493C13.2868 14.2058 13.4442 13.4718 13.7606 12.9513ZM13.0737 4.19939C12.7285 4.06677 12.3485 4 11.9344 4C11.5194 4 11.1405 4.06677 10.7952 4.19939C10.4521 4.33122 10.1518 4.51771 9.89848 4.75622C9.64404 4.99367 9.44963 5.27379 9.312 5.59396C9.17437 5.91504 9.10556 6.26299 9.10556 6.63872C9.10556 7.01446 9.17437 7.36241 9.312 7.68349C9.44963 8.00352 9.64404 8.28286 9.89848 8.52136C10.1518 8.75974 10.4521 8.9453 10.7952 9.07792C11.1405 9.20976 11.5194 9.27745 11.9344 9.27745C12.3485 9.27745 12.7285 9.20976 13.0737 9.07792C13.4168 8.9453 13.7161 8.75974 13.9704 8.52136C14.2239 8.28286 14.4194 8.00352 14.557 
                                      7.68349C14.6947 7.36241 14.7635 7.01446 14.7635 6.63872C14.7635 6.26299 14.6947 5.91504 14.557 5.59396C14.4194 5.27379 14.2239 4.99367 13.9704 4.75622C13.7161 4.51771 13.4168 4.33122 13.0737 4.19939ZM8.75526 5.30869V4.12288H4V5.30869H5.63894V9.15457H7.11632V5.30869H8.75526ZM18.9904 4.3469C18.6683 4.19847 18.2893 4.12327 17.8484 4.12327H15.5101V9.15392H16.9855V7.70838H17.8484C18.2893 7.70838 18.6683 7.63318 18.9904 7.48384C19.3117 7.33541 19.5601 7.12483 19.7366 6.85484C19.9132 6.58578 20 6.26931 20 5.90845C20 5.55682 19.9132 5.24587 19.7366 4.97602C19.5601 4.70683 19.3117 4.49624 18.9904 4.3469ZM11.2392 5.39166C11.4387 5.27379 11.6701 5.21545 11.9344 5.21545C12.1988 5.21545 12.4302 5.27379 12.6297 5.39166C12.8292 5.50954 12.9849 5.67653 13.0955 5.89001C13.2072 6.10521 13.2632 6.35386 13.2632 6.63872C13.2632 6.92267 13.2072 7.17224 13.0955 7.38651C12.9849 7.60092 12.8292 7.76791 12.6297 7.88565C12.4302 8.00352 12.1988 8.062 11.9344 8.062C11.6701 8.062 11.4387 8.00352 11.2392 7.88565C11.0397 7.76791 10.8841 7.60092 10.7724 7.38651C10.6617 7.17224 10.6057 6.92267 10.6057 6.63872C10.6057 6.35386 10.6617 6.10521 10.7724 5.89001C10.8841 5.67653 11.0397 5.50954 11.2392 5.39166ZM16.9855 5.27195H17.6149C17.9252 5.27195 18.1515 5.32845 18.2913 5.43895C18.4309 5.54931 18.5017 5.70616 18.5017 5.90845C18.5017 6.11535 18.4309 6.27589 18.2913 6.38902C18.1515 6.50228 17.9252 6.55878 17.6149 6.55878H16.9855V5.27195Z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                      오늘 시리즈 순위 1위
                    </div>
                  </div>
                  <div className="detail-synopsis">
                    <div>
                      천재적인 두뇌의 소유자 우영우. 대형 로펌의 신입 변호사이자
                      자폐 스펙트럼 장애를 가진 여성으로서 법정 안팎에서 다양한
                      난관을 헤쳐간다.
                    </div>
                  </div>
                </div>
                <div className="detail-content-right">
                  <div className="detail-tag">
                    <span style={{ color: '#777' }}>출연: </span>
                    <span className="tag-item">박은빈, </span>
                    <span className="tag-item">강태오, </span>
                    <span className="tag-item">강기영</span>
                  </div>
                  <div className="detail-tag">
                    <span style={{ color: '#777' }}>장르: </span>
                    <span className="tag-item">TV 프로그램·법정</span>
                    <span className="tag-item">한국 드라마, </span>
                    <span className="tag-item">사회 문제를 다룬 드라마</span>
                  </div>
                  <div className="detail-tag">
                    <span style={{ color: '#777' }}>시리즈 특징: </span>
                    <span className="tag-item">힐링, </span>
                    <span className="tag-item">감명을 주는, </span>
                    <span className="tag-item">진심 어린</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-container">
              <div className="epiSelector">
                <div className="epiSelector-header">
                  <h3 className="header-label">회차</h3>
                  <div className="header-name">이상한 변호사 우영우</div>
                </div>
                <div className="epiSelector-container">
                  <EpiItem clickstate={isClick}></EpiItem>
                  <div className="section-divider">
                    <button
                      className="btncontrol"
                      onClick={() => setIsClick(!isClick)}
                    >
                      <div>
                        <svg width={24} height={24} viewBox="0 0 24 24">
                          <path
                            fill="#fff"
                            fillRule="evenodd"
                            d={
                              isClick
                                ? 'M19.293 16.7071L12.0001 9.41421L4.70718 16.7071L3.29297 15.2929L11.293 7.29289C11.4805 7.10536 11.7349 7 12.0001 7C12.2653 7 12.5196 7.10536 12.7072 7.29289L20.7072 15.2929L19.293 16.7071Z'
                                : 'M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z'
                            }
                          ></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-container">
              <div className="more-wrapper">
                <h3 className="header-label">함께 시청된 콘텐츠</h3>
                <div className="section-container">
                  <div className="more-container">
                    {/* <MoreCardItem></MoreCardItem> */}
                  </div>
                </div>

                <div className="section-divider">
                  <button
                    className="btncontrol"
                    onClick={() => setIsClick2(!isClick2)}
                  >
                    <div>
                      <svg width={24} height={24} viewBox="0 0 24 24">
                        <path
                          fill="#fff"
                          fillRule="evenodd"
                          d={
                            isClick2
                              ? 'M19.293 16.7071L12.0001 9.41421L4.70718 16.7071L3.29297 15.2929L11.293 7.29289C11.4805 7.10536 11.7349 7 12.0001 7C12.2653 7 12.5196 7.10536 12.7072 7.29289L20.7072 15.2929L19.293 16.7071Z'
                              : 'M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z'
                          }
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="content-container">
              <div className="about-wrapper">
                <div className="about-header">
                  <h3>
                    <strong>이상한 변호사 우영우</strong>
                    상세정보
                  </h3>
                </div>
                <div className="about-container">
                  <AboutTagItem
                    title="크리에이터:"
                    content="유인석, 문지원"
                  ></AboutTagItem>
                  <AboutTagItem
                    title="출연:"
                    content="박은빈, 강태오, 강기영"
                  ></AboutTagItem>
                  <AboutTagItem
                    title="장르:"
                    content="TV 프로그램·법정한국 드라마, 사회 문제를 다룬 드라마, 드라마"
                  ></AboutTagItem>
                  <AboutTagItem
                    title="시리즈 특징:"
                    content="힐링, 감명을 주는, 진심 어린"
                  ></AboutTagItem>
                  <AboutTagItem
                    title="관람등급:"
                    rating="15"
                    content="15세이상관람가"
                  ></AboutTagItem>

                  <div className="broadcaster">
                    <div>ENA</div>
                    <div>2022. 3. 1.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
