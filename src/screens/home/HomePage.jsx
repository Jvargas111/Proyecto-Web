import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    return (
      <div className='flex flex-col justify-start min-h-screen'>
        <div className='flex justify-center p-3 bg-gray-200'>
          <img src='/public/favicon.ico' alt='logo' className='w-12 mr-2 ' />
          <h2 className='mr-16'>
            <strong className='text-orange-400'>GOAL</strong> TRACKER
          </h2>
          <button
            className='border-none bg-orange-400 text-white w-32 py-2 rounded-lg text-2xl hover:bg-orange-600 transition-colors'
            onClick={() => navigate('/noticias')}
          >
            Noticias
          </button>
          <button
            className='border-none bg-orange-400 text-white w-45 ml-4 py-2 rounded-lg text-2xl hover:bg-orange-600 transition-colors'
            onClick={() => navigate('/envivo')}
          >
            Partidos En Vivo
          </button>
          <button
            className='border-none bg-orange-400 text-white w-45 ml-4 py-2 rounded-lg text-2xl hover:bg-orange-600 transition-colors mr-0'
            onClick={() => navigate('/')}
          >
            Cerrar sesión
          </button>
        </div>
        <div className='w-full h-auto mt-6'>
          <img src='/public/portada.png' alt='Main' />
        </div>
        <footer className='mt-6 flex justify-around p-18 bg-gray-200 text-orange-400 text-2xl'>
          <div className='flex-1 p-10 text-center'>Sección 1</div>
          <div className='flex-1 p-10 text-center'>Sección 2</div>
          <div className='flex-1 p-10 text-center'>Sección 3</div>
        </footer>
      </div>
    );
};

export default HomePage;
