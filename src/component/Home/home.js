/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import Nav from './Nav/nav';
import Backboard from './Backboard-Banner/backboard';
import Banner from './Backboard-Banner/banner';
import './home.css';
import { CgProfile } from 'react-icons/cg';
import Cards from './Items/cards';

import { popupState } from './recoil/Popup';
import { scrollState } from './recoil/Scroll';
import { useRecoilValue } from 'recoil';
import Detail from './Detail/detail';

import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';

export default function Home() {
  const [ScrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);

  const popup = useRecoilValue(popupState);
  const scroll = useRecoilValue(scrollState);

  function handleScroll() {
    if (ScrollY > 10) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }

  useEffect(() => {
    function scrollListener() {
      window.addEventListener('scroll', handleScroll);
    } //window에서 스크롤을 감시 시작
    scrollListener(); //window에서 스크롤을 감시
    return () => {
      //window 에서 스크롤 감시 종료
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <div className="home">
      <div
        style={
          popup
            ? { width: '100%' }
            : {
                position: 'fixed',
                width: '100%',
                top: -scroll,
              }
        }
      ></div>
      <div className="home-header">
        <div className="nav_bar">
          <img
            src="https://i.ibb.co/r5krrdz/logo.png"
            alt=""
            className="logo"
          />
          <Nav></Nav>
          <div className="right">
            <div className="nav-element">
              <div className="searchBox">
                <button className="search">
                  <svg
                    className="search-icon"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="nav-element">
              <span className="noti">
                <button className="noti-menu">
                  <svg className="noti-icon">
                    <path d="M13 4.57092C16.3922 5.05624 18.9998 7.9736 18.9998 11.5V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11.5C4.99978 7.97345 7.6076 5.05599 11 4.57086V2H13V4.57092ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z"></path>
                  </svg>
                </button>
              </span>
            </div>
            <div className="nav-element">
              <CgProfile className="profile" />
            </div>
          </div>
        </div>
      </div>
      {/* header */}
      <div className="content">
        <span className="container">
          <div className="row">
            <Backboard />
            <Banner />
          </div>
        </span>
        <Cards name="넷플릭스 인기 콘텐츠"></Cards>
        <Cards name="지금 뜨는 콘텐츠"></Cards>
        <Cards name="청룡영화상 수상작&후보작"></Cards>
        <Cards name="오늘 대한민국의 TOP10 영화" className="rank"></Cards>
        <Cards name="한국 코미디 시리즈"></Cards>
        <Cards name="오직 넷플릭스에서"></Cards>
        <Cards name="긴장감 넘치는 한국 범죄 수사 영화"></Cards>
      </div>
      <footer>
        <div className="socials">
          <a href="https://www.facebook.com/NetflixKR" className="social">
            <FaFacebookF className="social_icon" />
          </a>
          <a href="https://www.instagram.com/netflixkr/" className="social">
            <AiOutlineInstagram className="social_icon" />
          </a>
          <a href="https://twitter.com/netflixkr" className="social">
            <FaTwitter className="social_icon" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCiEEF51uRAeZeCo8CJFhGWw/featured"
            className="social"
          >
            <FaYoutube className="social_icon" />
          </a>
        </div>
        <ul className="footer_items">
          <li className="footer_item">
            <a href="#" className="footer_link_item">
              화면 해설
            </a>
          </li>
          <li className="footer_item">
            <a href="#" className="footer_link_item">
              고객 센터
            </a>
          </li>
          <li className="footer_item">
            <a href="#" className="footer_link_item">
              기프트카드
            </a>
          </li>
          <li className="footer_item">
            <a href="#" className="footer_link_item">
              미디어 센터
            </a>
          </li>
          <li className="footer_item">
            <a href="#" className="footer_link_item">
              투자 정보(R)
            </a>
          </li>
          <li className="footer_item">
            <a href="#" className="footer_link_item">
              입사 정보
            </a>
          </li>
          <li className="footer_item">
            <a href="#" className="footer_link_item">
              이용 약관
            </a>
          </li>
          <li className="footer_item">
            <a href="#" className="footer_link_item">
              개인정보
            </a>
          </li>
          <li className="footer_item">
            <a href="#" className="footer_link_item">
              법적 고지
            </a>
          </li>
          <li className="footer_item">
            <a href="#" className="footer_link_item">
              쿠키 설정
            </a>
          </li>
          <li className="footer_item">
            <a href="#" className="footer_link_item">
              회사 정보
            </a>
          </li>
          <li className="footer_item">
            <a href="#" className="footer_link_item">
              문의하기
            </a>
          </li>
        </ul>
        <div className="footer_service">
          <button className="serviceBtn">서비스 코드</button>
        </div>
        <div class="copy-text">
          <div class="copy-text-block">
            넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
            제2018-서울종로-0426호 전화번호: 080-001-9587
          </div>
          <div class="copy-text-block">대표: 레지널드 숀 톰프슨</div>
          <div class="copy-text-block">이메일 주소: korea@netflix.com</div>
          <div class="copy-text-block">
            주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층
            우편번호 03161
          </div>
          <div class="copy-text-block">사업자등록번호: 165-87-00119</div>
          <div class="copy-text-block">
            클라우드 호스팅: Amazon Web Services Inc.
          </div>
          <div class="copy-text-block">
            <a href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1658700119">
              공정거래위원회 웹사이트
            </a>
          </div>
        </div>
      </footer>
      {popup ? '' : <Detail />}
      <div
        style={
          popup
            ? { display: 'none' }
            : {
                tabindex: '-1',
                opacity: '0.7',
              }
        }
      >
        <div
          style={{
            backgroundColor: '#000',
            height: '100%',
            left: '0',
            position: 'fixed',
            top: '0',
            width: '100%',
          }}
        ></div>
      </div>
    </div>
  );
}
