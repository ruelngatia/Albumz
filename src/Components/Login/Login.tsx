import React, { useContext } from 'react'
import logo from '../../assets/logo.png'
import { GoogleLogin } from '@react-oauth/google';
import { AuthService } from '../../Service/AuthService';
import { AlbumZ } from '../../App';
import { useNavigate } from 'react-router-dom';

export default function Login() {
const context = useContext(AlbumZ);
const navigator = useNavigate();

  return (
    <section data-testid='login-component' className=' flex flex-col justify-center items-center pt-11 pb-16 space-y-3'>
        <img className='w-44' src={logo} alt="logo" />
        <p>Welcome to AlbumZ</p>
        <input className='border rounded-sm w-2/3 px-2 py-2 border-grey focus:border-purple' type="email" placeholder='Email' />
        <input className='border rounded-sm w-2/3 px-2 py-2 border-grey focus:border-purple' type="password" placeholder='Password' />
        <button className='text-white text-xl w-2/3 font-semibold rounded-md py-1 px-2 bg-purple'
         onClick={()=>{
          
         }} 
        >Login</button>
        <p className='hover:underline text-purple'>Forgot password?</p>
        <GoogleLogin
           onSuccess={credentialResponse => {
            new AuthService().setLoginToken(credentialResponse.credential ?? '');
            context?.toggleIsLoggedin(true)
            context?.toggleShowLoginDialog()
            navigator('/Home')
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
    </section>
  )
}
