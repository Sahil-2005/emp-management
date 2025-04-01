import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password)
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }

  
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form onSubmit = {(e) => {
              submitHandler(e);
            }} className='flex flex-col items-center justify-center'>  
                <input required
                  value={email}
                  onChange={(e) => {
                  setEmail(e.target.value);
                }} className='border-2 text-xl outline-none text-white bg-transparent border-emerald-600 py-3 px-5 rounded-full placeholder:text-color-grey-500' type="email"  placeholder='Enter your email'/>
                <input 
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required value={password} className = 'border-2 text-xl outline-none text-white bg-transparent border-emerald-600 py-3 px-5 rounded-full mt-3' type="password"  placeholder='Enter password'/>

                <button className='border-2 mt-7 text-xl border-none text-white bg-emerald-600 font-semibond w-full py-3 px-8 rounded-full color-white'>Login</button>
            </form>

        </div>
        
    </div>
  )
}

export default Login
