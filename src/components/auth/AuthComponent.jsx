import React from 'react'
import { Outlet } from 'react-router-dom';

const AuthComponent = () => {
  return (
    <div className='flex items-center justify-center bg-gray-100 h-full'>
         <Outlet />
    </div>
  )
}

export default AuthComponent;