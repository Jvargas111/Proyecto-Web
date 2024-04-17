import React from 'react'
import { useState } from 'react';
import { RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { toast } from 'react-toastify'

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if([email, password].includes("")) {
      toast.error('Todos los campos son obligatorios', {
        theme:'dark'
      });
      return;
    }
  }

  return (
    <div className='bg-white p-8 rounded-lg w-98 '>
      <div>
        <h1 className='text-3xl uppercase font-bold text-center'>Iniciar sesión</h1>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
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
        <div>
          <button className='mt-6 border-none bg-orange-400 text-white w-full py-2 rounded-lg text-2xl hover:bg-orange-600 transition-colors'>
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;