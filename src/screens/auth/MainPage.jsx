import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className='main-container'>
      <div className='main-content'>
        <div className='main-menu'>
          <button className='main-button' onClick={() => navigate('/noticias')}>
            Noticias
          </button>
          <button className='main-button'>Partidos En Vivo</button>
        </div>
        <div className='main-image'>
          <img src='src\screens\auth\futbol.jpeg' alt='Main' />
        </div>
        <footer className='main-footer'>
          <div className='footer-section'>Sección 1</div>
          <div className='footer-section'>Sección 2</div>
          <div className='footer-section'>Sección 3</div>
        </footer>
      </div>
    </div>
  );
};

export default MainPage;
