import React, { useEffect } from 'react';
import './EnVivo.css';

function EnVivo() {
  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append('x-rapidapi-key', '27645fd0528778b8586e7060adaee0af');
    myHeaders.append('x-rapidapi-host', 'v3.football.api-sports.io');

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch('https://v3.football.api-sports.io/fixtures?live=all', requestOptions)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        // Opcional: Puedes agregar lógica aquí para manejar los datos recibidos
      })
      .catch((error) => console.log('error', error));

    const script = document.createElement('script');
    script.src = 'https://widgets.api-sports.io/2.0.3/widgets.js';
    script.type = 'module'; // Asegura que el script se carga como un módulo
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className='FootballWidget'>
      <div
        id='wg-api-football-livescore'
        data-host='v3.football.api-sports.io'
        data-key='27645fd0528778b8586e7060adaee0af'
        data-date=''
        data-league=''
        data-season=''
        data-theme=''
        data-refresh='15'
        data-show-toolbar='true'
        data-show-errors='false'
        data-show-logos='true'
        data-modal-game='true'
        data-modal-standings='true'
        data-modal-show-logos='true'
      ></div>
    </div>
  );
}

export default EnVivo;
