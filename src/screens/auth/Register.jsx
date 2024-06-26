import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine, RiUserLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, lastName, email, password, confirmPassword].includes('')) {
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

    toast.success('Registro confirmado', {
      theme: 'dark',
    });
    return;

    //Validar que el Email no existe en la base de datos

    //Enviar Email de verificacion

    //todo el back
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
        <h1 className='text-3xl uppercase font-bold text-center'>Registrarse</h1>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 mb-6'>
        <div className='relative'>
          <RiUserLine className='absolute left-2 top-1/3 -translate-y-1/2 text-gray-500' />
          <input
            type='text'
            className=' border-black-100 outline-none py-2 px-8 rounded-lg text-2xl'
            placeholder='Nombre(s)'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='relative'>
          <RiUserLine className='absolute left-2 top-1/3 -translate-y-1/2 text-gray-500' />
          <input
            type='text'
            className=' border-black-100 outline-none py-2 px-8 rounded-lg text-2xl'
            placeholder='Apellidos'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
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
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Equipos</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              // value={age}
              label='Equipos'
              // onChange={handleChange}
            >
              <MenuItem value={10}>Barcelona</MenuItem>
              <MenuItem value={20}>Real Madrid</MenuItem>
              <MenuItem value={30}>Manchester City</MenuItem>
              <MenuItem value={40}>Liverpool</MenuItem>
              <MenuItem value={50}>Liverpool</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <div>
          <button className='mt-4 border-none bg-orange-400 text-white w-full py-2 rounded-lg text-2xl hover:bg-orange-600 transition-colors'>
            Registrarse
          </button>
        </div>
      </form>
      <div className='text-center'>
        ¿Ya tienes una cuenta?{' '}
        <Link to='/' className='text-orange-600 font-medium'>
          {' '}
          ¡Ingresa aqui!{' '}
        </Link>
      </div>
    </div>
  );
};

export default Register;
