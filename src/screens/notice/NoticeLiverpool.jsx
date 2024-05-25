import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiArrowRightLine, RiArrowLeftLine } from 'react-icons/ri';

const NoticeLiverpool = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='flex flex-col min-h-screen my-5 mx-64'>
      <header className='flow-root p-2.5 bg-gray-200 border border-solid border-gray-300'>
        <div className='float-left m-5 border rounded p-4'>
          <img src='/public/teams/liverpool/Liverpool.png' width={300} height={200} alt='Shield' />
        </div>
        <div className='float-right my-12 rounded p-4 mx-5'>
          <img src='/public/favicon.ico' alt='logo' className='w-12 mr-2 mx-20' />
          <h2 className='mx-6'>
            <strong className='text-orange-400'>GOAL</strong> TRACKER
          </h2>
          <h1 className='ml-7'>LIVERPOOL</h1>
        </div>
      </header>

      <main className='flex-1 flex flex-col items-center p-5 bg-gray-200 mt-5 uppercase text-center border border-solid border-gray-300'>
        <h1>¡La Remontada Épica del Liverpool Contra el Barcelona!</h1>
        <img
          src='/public/teams/liverpool/PortadaLiverpool.png'
          alt='Main'
          className='w-full h-auto my-5'
          width={800}
          height={400}
        />
      </main>

      <div className='text-left mt-5 bg-gray-200 border border-solid border-gray-300'>
        <div className='text-lg mx-12 my-9'>
          <p>
            En una noche que quedará grabada en la memoria de los aficionados al fútbol, el Liverpool protagonizó una
            remontada histórica contra el Barcelona en la semifinal de la Liga de Campeones. Con un marcador adverso de
            3-0 en la ida y sin dos de sus jugadores estrella, Mohamed Salah y Roberto Firmino, los Reds desafiaron
            todas las probabilidades para ganar 4-0 en Anfield y avanzar a la final.
          </p>
          <p>
            Desde el inicio del partido, el Liverpool mostró su determinación y espíritu de lucha. Con un ambiente
            electrizante en el estadio, los jugadores del Liverpool presionaron al Barcelona desde el primer minuto y
            crearon varias oportunidades de gol. El primer gol llegó temprano en el partido, cuando Divock Origi anotó
            un gol sorprendente después de un córner bien ejecutado.
          </p>
          <p>
            Con el impulso a su favor, el Liverpool continuó atacando y pronto encontró el segundo gol a través de
            Georginio Wijnaldum, quien anotó dos goles en apenas dos minutos después de ingresar como suplente. Con el
            marcador empatado en el global, el Liverpool se lanzó al ataque en busca del gol ganador.
          </p>
          <p>
            Y ese gol llegó en el minuto 79, cuando Trent Alexander-Arnold ejecutó un tiro de esquina rápido que
            sorprendió a la defensa del Barcelona y encontró a Origi, quien marcó su segundo gol de la noche con un
            remate certero. Con Anfield estallando de jubilo, el Liverpool logró sellar una victoria increíble y
            asegurar su lugar en la final de la Liga de Campeones.
          </p>
          <p>
            La remontada del Liverpool contra el Barcelona será recordada como una de las mayores gestas en la historia
            del fútbol. Contra todas las expectativas, los Reds demostraron su carácter y determinación para superar las
            adversidades y lograr la victoria. Ahora, se preparan para enfrentarse a otro desafío en la final, donde
            buscarán agregar otra página dorada a su gloriosa historia.
          </p>
        </div>
        <div className='mx-12 my-9'>
          <small>Creditos: Reporteros asociados del mundo</small>
        </div>
      </div>

      <div className=' text-white text-center mt-5'>
        <button
          className='border-none bg-orange-400 text-white rounded-lg text-2xl hover:bg-orange-600 transition-colors ml-6 flex items-center justify-center'
          onClick={() => navigate('/NoticeManchesterCity')}
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

export default NoticeLiverpool;
