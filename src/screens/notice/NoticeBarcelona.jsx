import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiArrowRightLine, RiArrowLeftLine } from 'react-icons/ri';

const NoticeBarcelona = () => {
  const navigate = useNavigate();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className='flex flex-col min-h-screen my-5 mx-64'>
      <header className='flow-root p-2.5 bg-gray-200 border border-solid border-gray-300'>
        <div className='float-left m-5 border rounded p-4'>
          <img src='/public/teams/fcbarcelona/FcBarcelona.png' width={300} height={200} alt='Shield' />
        </div>
        <div className='float-right my-12 rounded p-4 mx-5'>
          <img src='/public/favicon.ico' alt='logo' className='w-12 mr-2 mx-20' />
          <h2 className='mx-6'>
            <strong className='text-orange-400'>GOAL</strong> TRACKER
          </h2>
          <h1>FC BARCELONA</h1>
        </div>
      </header>

      <main className='flex-1 flex flex-col items-center p-5 bg-gray-200 mt-5 uppercase text-center border border-solid border-gray-300'>
        <h1>¡El Barça es Campeón de la Champions y logra su segundo triplete!</h1>
        <img
          src='/public/teams/fcbarcelona/PortadaBarcelona.png'
          alt='Main'
          className='w-full h-auto my-5'
          width={800}
          height={400}
        />
      </main>
      <div className='text-left mt-5 bg-gray-200 border border-solid border-gray-300'>
        <div className='text-lg mx-12 my-9'>
          <p>
            El FC Barcelona se consagró Campeón de la UEFA Champions League derrotando 3-1 a la Juventus de Italia para
            conseguir el triplete en la temporada y ser el primer equipo en la historia en lograrlo en dos ocasiones. El
            Barcelona entró esta noche en la historia al levantar, en el Estadio Olímpico de Berlín, su quinta Copa de
            Europa y convertirse en el primer club que conquista, por segunda vez, el trébol de grandes títulos.
          </p>
          <p>
            Lo hizo en una sufrida final que parecía tener controlada, que se le complicó en la segunda mitad y que
            resolvió, una vez más, gracias al talento de su tridente atacante, formado por Messi, Neymar y Luis Suárez,
            que acaban la temporada con 122 goles.
          </p>
          <p>
            Salió la Juve con todo, a presionar al Barça hasta la línea de fondo. Tres minutos de agobio del conjunto
            azulgrana, en los que un par de errores de Mascherano en la salida del balón sembraron la zozobra en la zaga
            catalana y permitieron que Tévez tuviese la primera ocasión del partido con un disparo desde la frontal que
            se le marchó alto.
          </p>
          <p>
            El acoso para el Barcelona duró lo que Messi tardó en agarrar su primer balón y ejecutar un cambio de juego
            milimétrico sobre la llegada de Jordi Alba.
          </p>
          <p>
            El lateral azulgrana controló en carrera, combinó con Neymar y éste con Iniesta, para que el manchego
            regalase el gol a Rakitic, que remató de primeras sobre la salida de Buffon.
          </p>
          <p>
            A los cuatro minutos, el Barça ya mandaba en el marcador. Y empezó a hacerlo también en el partido con una
            autoridad insultante. Neymar pudo hacer el segundo poco después, pero su disparo salió rozando la escuadra.
            Y un centro del brasileño pegó en la mano de Lichststeiner, pero el turco Çakir decidió que era una acción
            involuntaria y no señaló penalti.
          </p>
          <p>
            Alves, antes del cuarto de hora, también pudo dejar prácticamente sentenciada la final, pero su remate esta
            vez se encontró con un paradón colosal de Buffon, el primero de varios que el veterano guardameta
            transalpino haría esta noche.
          </p>
          <p>
            Con Pirlo desactivado y Vidal sobrexcitado -se las tuvo con Iniesta, Busquets, Neymar y Alves en a penas
            veinte minutos, en los que el árbitro le perdonó la expulsión- la Juve cogió aire en cuanto apareció Pogba.
          </p>
          <p>
            El francés se echó el equipo a la espalda y el conjunto de Allegri inquietó al Barcelona en un par de
            llegadas por banda izquierda y en un tiro desviado de Morata tras un error en la salida del balón de Ter
            Stegen.
          </p>
          <p>
            Pero si el Juventus se acercaba con cierto peligro a la portería defendida por el meta alemán era más por
            errores del rival que por méritos propios. Y, en cuanto el Barça recuperó el ritmo, volvió aplicarse en la
            presión y robó de nuevo arriba, llegaron dos ocasiones claras de Luis Suárez justo antes de llegar al
            descanso.
          </p>
          <p>
            En la primera, cruzó demasiado el balón. En la segunda se encontró con la manopla de Buffon, el responsable
            de que su equipo llegara vivo a la segunda mitad.
          </p>
          <p>
            La relación entre Suárez y Buffon siguió durante los primeros minutos de la reanudación, cuando el italiano
            le sacó otro disparo con la puntera tras un contragolpe conducido por Rakitic.
          </p>
          <p>
            El Barcelona estaba perdonando y Messi decidió pasar a la acción. Una doble pared de la ‘Pulga’ con Ney y
            Suárez acabó con un tiro del argentino que se marchó fuera por poco.
          </p>
          <p>
            Pero la Juve empataría en la siguiente jugada. Tevez, desactivado durante la primera mitad por un enorme
            Piqué, cazó un balón servido por Lichtsteiner para fusilar a Ter Stegen, que rechazó el esférico hacia donde
            estaba Morata. El exmadridista no perdonó.
          </p>
          <p>
            Quedaban 35 minutos por disputarse y sorprendentemente había vuelto la igualdad en el marcador. El Barça
            acusó el mazazo anímico y pareció partirse en dos, ante la exhuberancia física de su rival, que a estas
            alturas del choque se había adueñado del centro del campo.
          </p>
          <p>
            Tévez y Pogba lo probaron de lejos. El Juventus ya se atrevía con todo. La magia de Iniesta salió entonces
            al rescate. Y de nuevo Messi, siempre Messi, que agarró un balón en la medular para ejecutar al conjunto
            turinés a la contra.
          </p>
          <p>
            El crack de Rosario se marcó un eslalon estratosférico y lo culminó con un disparo cruzado que despejó
            Buffon. Esta vez, Luis Suárez no tuvo piedad del portero italiano en el rechace e hizo subir el 1-2 en el
            marcador, en el minuto 68 de partido.
          </p>
          <p>
            La final podría haber quedado sentenciada dos minutos después, pero el árbitro anuló un gol a Neymar por
            tocar el balón con la mano en su remate de cabeza.
          </p>
          <p>
            A partir de ahí, sufrió el Barcelona, porque le empezó a quemar el balón. Los disparos de Marchisio y Tévez
            encontraron respuesta en un seguro Ter Stegen y Neymar, siete minutos después de que se cumpliera el tiempo
            añadido, sentenciaba la final de nuevo en una contra.
          </p>
        </div>
        <div className='mx-12 my-9'>
          <small>Creditos: Reporteros asociados del mundo</small>
        </div>
      </div>

      <div className=' text-white text-center mt-5'>
        <button
          className='border-none bg-orange-400 text-white rounded-lg text-2xl hover:bg-orange-600 transition-colors ml-6 flex items-center justify-center'
          onClick={() => navigate('/home')}
        >
          <RiArrowLeftLine className='mx-2' />
          Regresar a la pagina anterior
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

export default NoticeBarcelona;
