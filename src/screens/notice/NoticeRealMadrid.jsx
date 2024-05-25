import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiArrowRightLine, RiArrowLeftLine } from 'react-icons/ri';

const NoticeRealMadrid = () => {
  const navigate = useNavigate();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className='flex flex-col min-h-screen my-5 mx-64'>
      <header className='flow-root p-2.5 bg-gray-200 border border-solid border-gray-300'>
        <div className='float-left m-5 border rounded p-4'>
          <img src='/public/teams/realmadrid/RealMadrid.png' width={300} height={200} alt='Shield' />
        </div>
        <div className='float-right my-12 rounded p-4 mx-5'>
          <img src='/public/favicon.ico' alt='logo' className='w-12 mr-2 mx-20' />
          <h2 className='mx-6'>
            <strong className='text-orange-400'>GOAL</strong> TRACKER
          </h2>
          <h1 className='ml-2'>REAL MADRID</h1>
        </div>
      </header>

      <main className='flex-1 flex flex-col items-center p-5 bg-gray-200 mt-5 uppercase text-center border border-solid border-gray-300'>
        <h1>¡El Real Madrid Gana su 14ª Liga de Campeones!</h1>
        <img
          src='/public/teams/realmadrid/PortadaRealMadrid.png'
          alt='Main'
          className='w-full h-auto my-5'
          width={800}
          height={400}
        />
      </main>

      <div className='text-left mt-5 bg-gray-200 border border-solid border-gray-300'>
        <div className='text-lg mx-12 my-9'>
          <p>
            El Real Madrid se ha proclamado campeón de la Liga de Campeones de la UEFA por decimocuarta vez en su
            historia tras derrotar al Liverpool por 1-0 en una emocionante final disputada en París. Un solitario gol de
            Vinícius Júnior en el minuto 59 fue suficiente para que los blancos levantaran el trofeo una vez más. Desde
            el inicio del partido, el Real Madrid mostró su determinación y experiencia en finales europeas. El
            Liverpool comenzó fuerte, presionando alto y creando algunas oportunidades, pero la defensa del Real Madrid,
            liderada por un imperial Thibaut Courtois, se mantuvo firme.
          </p>
          <p>
            El gol llegó tras una brillante jugada por la banda izquierda, donde Ferland Mendy encontró a Vinícius
            Júnior con un centro preciso. El joven brasileño no falló y envió el balón al fondo de la red, desatando la
            locura entre los aficionados madridistas. El Liverpool intentó reaccionar, pero se encontró una y otra vez
            con un Courtois imbatible, quien realizó varias paradas cruciales para mantener la ventaja de su equipo. La
            defensa del Real Madrid, con jugadores como Dani Carvajal y David Alaba, también tuvo una actuación
            destacada.
          </p>
          <p>
            Con este triunfo, el Real Madrid no solo suma un título más a su impresionante palmarés, sino que también
            reafirma su dominio en el fútbol europeo. Este éxito es un testimonio del trabajo y la dedicación de todo el
            equipo, desde el cuerpo técnico liderado por Carlo Ancelotti hasta los jugadores y la directiva del club. La
            victoria en la Liga de Campeones también garantiza al Real Madrid un lugar en la próxima edición del torneo,
            así como en la Supercopa de la UEFA y el Mundial de Clubes de la FIFA. Los aficionados madridistas tienen
            muchos motivos para celebrar, y este título será recordado como uno de los más especiales en la rica
            historia del club.
          </p>
          <p>
            El camino hacia el título no fue fácil. El Real Madrid tuvo que superar a algunos de los mejores equipos de
            Europa en su camino hacia la final. En los octavos de final, se enfrentaron al Paris Saint-Germain, un
            equipo repleto de estrellas. Tras una derrota por 1-0 en el partido de ida en París, el Real Madrid logró
            una impresionante remontada en el Santiago Bernabéu, ganando 3-1 y avanzando a los cuartos de final. En los
            cuartos de final, el Real Madrid se enfrentó al Chelsea, el campeón defensor. En un emocionante
            enfrentamiento, el Real Madrid ganó 3-1 en Londres y empató 2-2 en Madrid, asegurando su lugar en las
            semifinales con un marcador global de 5-3.
          </p>
          <p>
            Las semifinales fueron quizás el desafío más grande para el Real Madrid, ya que se enfrentaron al Manchester
            City, uno de los equipos más fuertes de Europa. En un enfrentamiento épico, el Real Madrid perdió 4-3 en el
            partido de ida en Manchester. Sin embargo, en el partido de vuelta en Madrid, el Real Madrid logró otra
            remontada milagrosa, ganando 3-1 en tiempo extra para avanzar a la final con un marcador global de 6-5. En
            la final, el Real Madrid se enfrentó al Liverpool, un equipo al que habían derrotado en la final de 2018. El
            partido fue un enfrentamiento tenso y táctico, con ambos equipos mostrando su calidad y determinación. Al
            final, fue el Real Madrid quien salió victorioso, asegurando su decimocuarto título de la Liga de Campeones.
          </p>
          <p>
            La temporada del Real Madrid ha sido un testimonio de su resiliencia, determinación y calidad. Con jugadores
            clave como Karim Benzema, Luka Modric y Toni Kroos liderando el camino, el Real Madrid ha demostrado una vez
            más por qué es considerado el mejor club de fútbol del mundo. La victoria en la Liga de Campeones es la
            culminación de una temporada de arduo trabajo y dedicación, y los aficionados del Real Madrid pueden estar
            seguros de que su equipo continuará luchando por los títulos en los años venideros.
          </p>
        </div>
        <div className='mx-12 my-9'>
          <small>Creditos: Reporteros asociados del mundo</small>
        </div>
      </div>

      <div className=' text-white text-center mt-5'>
        <button
          className='border-none bg-orange-400 text-white rounded-lg text-2xl hover:bg-orange-600 transition-colors ml-6 flex items-center justify-center'
          onClick={() => navigate('/NoticeBarcelona')}
        >
          <RiArrowLeftLine className='mx-2' />
          Regresar a la pagina anterior
        </button>
        <button
          className='border-none bg-orange-400 text-white rounded-lg text-2xl hover:bg-orange-600 transition-colors ml-6 flex items-center justify-center mt-5'
          onClick={() => navigate('/NoticeManchesterCity')}
        >
          Siguiente noticia
          <RiArrowRightLine className='mx-2' />
        </button>
      </div>
    </div>
  );
};

export default NoticeRealMadrid;
