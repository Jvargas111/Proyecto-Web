import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RiMailLine } from 'react-icons/ri';
import { toast } from 'react-toastify';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    if ([email].includes('')) {
      toast.error('El email es obligatorio', {
        theme: 'dark',
      });
      return;
    }

    //Verificar que el Email exista
    //Enviar instrucciones de recuperacion de contraseña
    toast.success('Se han enviado las instrucciones al email', {
      theme: 'dark',
    });
    return;

    // Todo lo del back 
  };

  return (
    <div className='bg-white p-6 rounded-lg w-98 '>
      <div>
        <div className='text-center'>
          <img src='/public/favicon.ico' alt='Logo' className='w-48' />
          <h2>
            <strong className='text-orange-400'>GOAL</strong> {' '}
            TRACKER
          </h2>
        </div>
        <h1 className='text-2xl uppercase font-bold text-center mt-4'>Recuperar contraseña</h1>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 mb-6'>
        <div className='relative'>
          <RiMailLine className='absolute left-2 top-1/3 -translate-y-1/2 text-gray-500' />
          <input
            type='email'
            className=' border-black-100 outline-none py-2 px-8 rounded-lg text-2xl'
            placeholder='Correo electrónico'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button className='mt-2 border-none bg-orange-400 text-white w-full py-2 rounded-lg text-2xl hover:bg-orange-600 transition-colors'>
            Enviar instrucciones
          </button>
        </div>
      </form>
      <div className='text-center'>
        <div className='text-center'>
          ¿Ya tienes una cuenta?{' '}
          <Link to='/' className='text-orange-600 font-medium'>
            {' '}
            ¡Ingresa aqui!{' '}
          </Link>
        </div>
        <div className='mt-2'>
          ¿No tiene una cuenta?{' '}
          <Link to='/registro' className='text-orange-600 font-medium'>
            {' '}
            ¡Regístrate aqui!{' '}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
