import React from 'react';
import { Link } from 'react-router-dom';
import './NoticiasPage.css';

const NoticiasPage = () => {
  return (
    <div className='new-page-container'>
      <header className='new-page-header'>
        <div className='header-left'>
          <img src='https://via.placeholder.com/300x200' alt='Header Left' />
        </div>
        <div className='header-right'>
          <h1>Título de la Nueva Página</h1>
        </div>
      </header>
      <main className='new-page-main'>
        <div className='main-image'>
          <img src='https://via.placeholder.com/800x400' alt='Main' />
        </div>
        <div className='main-content'>
          <h2>Noticia</h2>
          <p>info</p>
        </div>
      </main>
      <footer className='new-page-footer'>
        <Link to='/main' className='back-button'>
          Volver a la Página Principal
        </Link>
      </footer>
    </div>
  );
};

export default NoticiasPage;
