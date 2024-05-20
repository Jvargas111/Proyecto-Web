import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { RiLockLine, RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { toast } from 'react-toastify';

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const { token } = useParams();
  
  // Funcionalidad para validar token
  if(token !== "111111") { 
    navigate('/')
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([password, confirmPassword].includes('')) {
      toast.error('Todos los campos son obligatorios', {
        theme: 'dark',
      });
      return;
    }

    if (password.length < 6) {
      toast.error('La contraseña debe tener al menos 6 caracteres (dígitos o letras)', {
        theme: 'dark',
      });
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Las contraseñas no coinciden', {
        theme: 'dark',
      });
      return;
    }

    toast.success('La contraseña se ha cambiado correctamente', {
      theme: 'dark',
    });
    return;

    //Todo con el back

  };

  return (
    <div className='bg-white p-6 rounded-lg w-98 '>
      <div>
        <div className='text-center'>
          <img src='/public/favicon.ico' alt='Hola' className='w-48' />
          <h2>
            <strong className='text-orange-400'>Goal</strong> {' '}
            Tracker
          </h2>
        </div>
        <h1 className='text-3xl uppercase font-bold text-center'>Cambiar contraseña</h1>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 mb-6'>
        <div className='relative'>
          <RiLockLine className='absolute left-2 top-1/3 -translate-y-1/2 text-gray-500 ' />
          <input
            type={showPassword ? 'text' : 'password'}
            className='  border-black-100 outline-none py-2 px-8 rounded-lg text-2xl'
            placeholder='Contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <RiEyeOffLine
              onClick={handleShowPassword}
              className='absolute right-3 top-1/3 -translate-y-1/2 text-gray-500 hover:cursos-pointer'
            />
          ) : (
            <RiEyeLine
              onClick={handleShowPassword}
              className='absolute right-3 top-1/3 -translate-y-1/2 text-gray-500 hover:cursos-pointer'
            />
          )}
        </div>
        <div className='relative'>
          <RiLockLine className='absolute left-2 top-1/3 -translate-y-1/2 text-gray-500 ' />
          <input
            type={showPassword ? 'text' : 'password'}
            className='  border-black-100 outline-none py-2 px-8 rounded-lg text-2xl'
            placeholder='Confirmar contraseña'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {showPassword ? (
            <RiEyeOffLine
              onClick={handleShowPassword}
              className='absolute right-3 top-1/3 -translate-y-1/2 text-gray-500 hover:cursos-pointer'
            />
          ) : (
            <RiEyeLine
              onClick={handleShowPassword}
              className='absolute right-3 top-1/3 -translate-y-1/2 text-gray-500 hover:cursos-pointer'
            />
          )}
        </div>
        <div>
          <button className='mt-2 border-none bg-orange-400 text-white w-full py-2 rounded-lg text-2xl hover:bg-orange-600 transition-colors'>
            Actualizar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
