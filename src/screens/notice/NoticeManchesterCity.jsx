import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiArrowRightLine, RiArrowLeftLine } from 'react-icons/ri';

const NoticeManchesterCity = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='flex flex-col min-h-screen my-5 mx-64'>
      <header className='flow-root p-2.5 bg-gray-200 border border-solid border-gray-300'>
        <div className='float-left m-5 border rounded p-4'>
          <img src='/public/teams/manchestercity/ManchesterCity.png' width={300} height={200} alt='Shield' />
        </div>
        <div className='float-right my-12 rounded p-4 mx-5'>
          <img src='/public/favicon.ico' alt='logo' className='w-12 ml-24' />
          <h2 className='ml-12'>
            <strong className='text-orange-400'>GOAL</strong> TRACKER
          </h2>
          <h1>MANCHESTER CITY</h1>
        </div>
      </header>

      <main className='flex-1 flex flex-col items-center p-5 bg-gray-200 mt-5 uppercase text-center border border-solid border-gray-300'>
        <h1>¡Erling Haaland se Une al Manchester City en un Fichaje Histórico!</h1>
        <img
          src='/public/teams/manchestercity/PortadaManchesterCity.png'
          alt='Main'
          className='w-full h-auto my-5'
          width={800}
          height={400}
        />
      </main>

      <div className='text-left mt-5 bg-gray-200 border border-solid border-gray-300'>
        <div className='text-lg mx-12 my-9'>
          <p>
            El Manchester City ha realizado uno de los fichajes más importantes de su historia al asegurar la firma del
            delantero noruego Erling Haaland. Procedente del Borussia Dortmund, Haaland se une al City con un contrato
            de cinco años y una transferencia reportada de 75 millones de euros.
          </p>
          <p>
            Con solo 21 años, Haaland ya ha demostrado ser uno de los delanteros más prolíficos de Europa. Durante su
            tiempo en el Dortmund, Haaland anotó 85 goles en 88 partidos, destacándose por su velocidad, potencia y
            capacidad para definir. Su llegada al Manchester City se espera que fortalezca aún más un equipo que ya es
            considerado uno de los mejores del continente.
          </p>
          <p>
            En su primera rueda de prensa como jugador del Manchester City, Haaland expresó su entusiasmo por unirse a
            un club con grandes ambiciones. 'Estoy encantado de unirme al Manchester City. Este es un equipo que juega
            un fútbol increíble y estoy ansioso por contribuir al éxito del club en los próximos años', dijo el
            delantero.
          </p>
          <p>
            El entrenador Pep Guardiola también elogió al nuevo fichaje, destacando su potencial y versatilidad. 'Erling
            es un talento excepcional que ha demostrado ser un goleador prolífico. Su capacidad para adaptarse a
            diferentes estilos de juego lo convierte en una incorporación valiosa para nuestro equipo. Estamos
            emocionados de verlo en acción con el City', comentó Guardiola.
          </p>
          <p>
            La llegada de Haaland al Manchester City no solo refuerza el ataque del equipo, sino que también envía un
            mensaje claro a sus rivales tanto en la Premier League como en Europa. Con Haaland en la delantera, el City
            busca continuar su dominio en el fútbol inglés y aspirar a la gloria en la Liga de Campeones.
          </p>
          <p>
            Los aficionados del City han recibido la noticia con gran entusiasmo, anticipando que Haaland puede ser la
            pieza que faltaba para llevar al club a nuevos niveles de éxito. Las expectativas son altas, pero con el
            talento y la determinación que Haaland ha mostrado hasta ahora en su carrera, pocos dudan de que tendrá un
            impacto inmediato.
          </p>
          <p>
            El fichaje de Haaland representa una inversión significativa para el Manchester City, pero también subraya
            el compromiso del club con la excelencia y la ambición de seguir siendo un competidor de primer nivel en
            todas las competiciones. A medida que Haaland se prepara para su debut, los aficionados y el mundo del
            fútbol estarán observando de cerca para ver cómo este joven prodigio deja su huella en el Etihad Stadium.
          </p>
        </div>
        <div className='mx-12 my-9'>
          <small>Creditos: Reporteros asociados del mundo</small>
        </div>
      </div>

      <div className=' text-white text-center mt-5'>
        <button
          className='border-none bg-orange-400 text-white rounded-lg text-2xl hover:bg-orange-600 transition-colors ml-6 flex items-center justify-center'
          onClick={() => navigate('/NoticeRealMadrid')}
        >
          <RiArrowLeftLine className='mx-2' />
          Regresar a la pagina anterior
        </button>
        <button
          className='border-none bg-orange-400 text-white rounded-lg text-2xl hover:bg-orange-600 transition-colors ml-6 flex items-center justify-center mt-5'
          onClick={() => navigate('/NoticeLiverpool')}
        >
          Siguiente noticia
          <RiArrowRightLine className='mx-2' />
        </button>
      </div>
    </div>
  );
};

export default NoticeManchesterCity;
