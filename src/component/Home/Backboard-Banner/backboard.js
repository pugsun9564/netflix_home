import React from 'react';
import './backboard.css';

export default function backboard() {
  return (
    <div className="backboard-layer">
      <div className="backboard-img-wrapper">
        <img
          className="backboard-img"
          alt="img"
          src="https://occ-0-395-325.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS5ktwauNUzFGqxRNJJFrMvYR2o-AGyIA7GRj0dE0CEhO5IfUmknc4qm8r-RjrkDF84I63LYha_gMKn3O-7vYm7fDfs4Sqh6BkwH.webp?r=5dc"
        ></img>
        <div className="layers layer1"></div>
        <div className="layers layer2"></div>
      </div>
      <div className="backboard-btn-layer">
        <span className="action-btn">
          <button className="a-btn">
            <div>
              <svg width={24} height={24} fill={'#fff'}>
                <path d="M13.1747 3.07702C11.01 2.79202 8.81537 3.30372 6.99988 4.51679C5.18439 5.72987 3.8718 7.56158 3.30668 9.67065C2.74155 11.7797 2.96243 14.0223 3.92815 15.9806C4.89388 17.9389 6.53859 19.4794 8.55586 20.3149C10.5731 21.1505 12.8254 21.2242 14.893 20.5224C16.9606 19.8205 18.7025 18.391 19.7942 16.5L18.0622 15.5C17.2131 16.9708 15.8582 18.0826 14.2501 18.6285C12.642 19.1744 10.8902 19.1171 9.32123 18.4672C7.75224 17.8173 6.47302 16.6192 5.7219 15.096C4.97078 13.5729 4.79899 11.8287 5.23853 10.1883C5.67807 8.5479 6.69897 7.12324 8.11102 6.17973C9.52307 5.23623 11.23 4.83824 12.9137 5.05991C14.5974 5.28158 16.1432 6.10778 17.2629 7.3846C18.1815 8.43203 18.762 9.7241 18.9409 11.0921L17.5547 10.168L16.4453 11.8321L19.4453 13.8321C19.7812 14.056 20.2188 14.056 20.5547 13.8321L23.5547 11.8321L22.4453 10.168L20.9605 11.1578C20.784 9.27909 20.0201 7.49532 18.7666 6.06591C17.3269 4.42429 15.3395 3.36202 13.1747 3.07702Z"></path>
              </svg>
            </div>
          </button>
        </span>
        <span className="rating-btn">
          15+
        </span>
      </div>
    </div>
  );
}
