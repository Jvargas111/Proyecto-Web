import React from 'react'
import { Outlet } from 'react-router-dom';

const AuthComponent = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
         <Outlet />
    </div>
  )
}

export default AuthComponent;