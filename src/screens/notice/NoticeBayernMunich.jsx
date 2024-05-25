import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiArrowRightLine, RiArrowLeftLine } from 'react-icons/ri';

const NoticeBayern = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='flex flex-col min-h-screen my-5 mx-64'>
      <header className='flow-root p-2.5 bg-gray-200 border border-solid border-gray-300'>
        <div className='float-left m-5 border rounded p-4'>
          <img src='/public/teams/bayernmunich/BayernMunich.png' width={300} height={200} alt='Shield' />
        </div>
        <div className='float-right my-12 rounded p-4 mx-5'>
          <img src='/public/favicon.ico' alt='logo' className='w-12 mr-2 mx-20' />
          <h2 className='mx-6'>
            <strong className='text-orange-400'>GOAL</strong> TRACKER
          </h2>
          <h1>BAYERN MUNICH</h1>
        </div>
      </header>

      <main className='flex-1 flex flex-col items-center p-5 bg-gray-200 mt-5 uppercase text-center border border-solid border-gray-300'>
        <h1>¡El Bayern Munich Hace Historia al Ganar el Sextete!</h1>
        <img
          src='/public/teams/bayernmunich/PortadaBayernMunich.png'
          alt='Main'
          className='w-full h-auto my-5'
          width={800}
          height={400}
        />
      </main>

      <div className='text-left mt-5 bg-gray-200 border border-solid border-gray-300'>
        <div className='text-lg mx-12 my-9'>
          <p>
            El Bayern Munich ha hecho historia al ganar el sextete, convirtiéndose en el primer equipo alemán en lograr
            este impresionante hito. El sextete del Bayern incluye la Bundesliga, la Liga de Campeones de la UEFA, la
            Copa DFB, la Supercopa de la UEFA, la Supercopa de Alemania y el Mundial de Clubes de la FIFA.
          </p>
          <p>
            La temporada 2020-2021 fue verdaderamente inolvidable para el Bayern Munich y sus seguidores. Bajo la
            dirección del entrenador Hans-Dieter Flick, el equipo mostró un fútbol brillante y dominante en todas las
            competiciones, estableciendo récords y dejando una marca indeleble en la historia del fútbol.
          </p>
          <p>
            El Bayern comenzó su temporada con una actuación impecable en la Bundesliga, asegurando el título con varias
            jornadas de anticipación. Además, el equipo también brilló en la Liga de Campeones de la UEFA, superando a
            equipos de primer nivel en su camino hacia la gloria europea.
          </p>
          <p>
            En la final de la Liga de Campeones de la UEFA, el Bayern Munich derrotó al Paris Saint-Germain para
            asegurar su sexto título en la competición. Con una actuación magistral de sus jugadores clave, el Bayern
            logró la victoria con un gol solitario de Kingsley Coman en el segundo tiempo.
          </p>
          <p>
            Además de sus logros en Europa, el Bayern Munich también triunfó en el ámbito nacional al ganar la Copa DFB,
            la Supercopa de Alemania y la Bundesliga. Estos títulos adicionales resaltan la dominación del Bayern en el
            fútbol alemán y su capacidad para mantenerse en la cima durante toda la temporada.
          </p>
          <p>
            El sextete del Bayern Munich es un testimonio del talento y la dedicación de los jugadores, el cuerpo
            técnico y el personal del club. Es un logro que quedará grabado en la historia del fútbol y que será
            recordado por generaciones venideras como un hito de excelencia y grandeza deportiva.
          </p>
        </div>
        <div className='mx-12 my-9'>
          <small>Creditos: Reporteros asociados del mundo</small>
        </div>
      </div>

      <div className=' text-white text-center mt-5'>
        <button
          className='border-none bg-orange-400 text-white rounded-lg text-2xl hover:bg-orange-600 transition-colors ml-6 flex items-center justify-center'
          onClick={() => navigate('/NoticeLiverpool')}
        >
          <RiArrowLeftLine className='mx-2' />
          Regresar a la página anterior
        </button>
        <button
          className='border-none bg-orange-400 text-white rounded-lg text-2xl hover:bg-orange-600 transition-colors ml-6 flex items-center justify-center mt-5'
          onClick={() => navigate('/NoticeRealMadrid')}
        >
          Siguiente noticia
          <RiArrowRightLine className='mx-2' />
        </button>
      </div>
    </div>
  );
};

export default NoticeBayern;
