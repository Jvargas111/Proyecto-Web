import React, { useState } from 'react';
import { RiEyeLine, RiEyeOffLine, RiLockLine, RiMailLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if ([email, password].includes('')) {
    //   toast.error('Todos los campos son obligatorios', {
    //     theme: 'dark',
    //   });
    //   return;
    // }

    navigate('/home');
  };

  return (
    <div className='bg-white p-6 rounded-lg w-98 my-5'>
      <div>
        <div className='text-center'>
          <img src='/public/favicon.ico' alt='Logo' className='w-48' />
          <h2>
            <strong className='text-orange-400'>GOAL</strong> TRACKER
          </h2>
        </div>
        <h1 className='text-3xl uppercase font-bold text-center mt-4'>Iniciar sesión</h1>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 mb-6'>
        <div className='relative'>
          <RiMailLine className='absolute left-2 top-1/3 -translate-y-1/2 text-gray-500' />
          <input
            type='email'
            className='border-black-100 outline-none py-2 px-8 rounded-lg text-2xl'
            placeholder='Correo electrónico'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='relative'>
          <RiLockLine className='absolute left-2 top-1/3 -translate-y-1/2 text-gray-500' />
          <input
            type={showPassword ? 'text' : 'password'}
            className='border-black-100 outline-none py-2 px-8 rounded-lg text-2xl'
            placeholder='Contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <RiEyeOffLine
              onClick={handleShowPassword}
              className='absolute right-3 top-1/3 -translate-y-1/2 text-gray-500 hover:cursor-pointer'
            />
          ) : (
            <RiEyeLine
              onClick={handleShowPassword}
              className='absolute right-3 top-1/3 -translate-y-1/2 text-gray-500 hover:cursor-pointer'
            />
          )}
        </div>
        <div className='text-right'>
          <Link to='/olvide-contraseña' className='text-gray-400 hover:text-orange-600 hovertransition-colors'>
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <div>
          <button className='border-none bg-orange-400 text-white w-full py-2 rounded-lg text-2xl hover:bg-orange-600 transition-colors'>
            Ingresar
          </button>
        </div>
      </form>
      <div className='text-center'>
        ¿No tiene una cuenta?{' '}
        <Link to='/registro' className='text-orange-600 font-medium'>
          {' '}
          ¡Regístrate aqui!{' '}
        </Link>
      </div>
    </div>
  );
};

export default Login;
