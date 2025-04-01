import React from 'react'
import { Navigate } from 'react-router-dom';

const Header = (props) => {


  const logOutUser = () => {
    localStorage.setItem("loggedInUser", '')
    props.changeUser('');
  }

  
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{props.data.firstName} 👋🏻</span></h1>
      <button className='bg-red-600 text-white px-5 text-lg font-medium py-2 rounded' onClick={logOutUser}>Log Out</button>
    </div>
  )
}

export default Header
