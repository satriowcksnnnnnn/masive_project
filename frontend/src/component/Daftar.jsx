import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';

import '../assets/styles/auth.css'

export default function Daftar() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="container text-white bg-fifth w-[1024px] flex justify-center">
          <div className="flex items-center">
            <div className='p-16 md:flex-1 md:ps-11 md:p-0'>
              <div className='flex justify-center mb-8 md:hidden md:mb-0'>
                <img src='/images/Logo.png' />
              </div>
              <h1 className='font-bold text-white text-4xl text-center md:text-5xl md:text-start'>DAFTAR SEKARANG</h1>
              <h2 className='text-center md:text-[20px] md:mt-3 md:text-white md:text-start'>Mempelajari lebih lanjut tentang Seni</h2>
              <form action="" className='text-[14px]'>
                <div className='mt-10'>
                  <label htmlFor="email">
                    E-mail
                  </label>
                  <div className='mt-3'>
                    <input type="email" className='w-full auth-form px-3 py-1' />
                  </div>
                </div>
                <div className='mt-5'>
                  <label htmlFor="username">
                    Username
                  </label>
                  <div className='mt-3'>
                    <input type="text" className='w-full auth-form px-3 py-1' />
                  </div>
                </div>
                <div className='mt-5'>
                  <label htmlFor="password">
                    Password
                  </label>
                  <div className='mt-3'>
                    <input type="password" className='w-full auth-form px-3 py-1' />
                  </div>
                </div>
                <div className='mt-5 flex justify-center'>
                  <div className="flex flex-none items-center gap-2">
                    <div className="flex-none flex">
                      <input type="checkbox" id='remember' name='remember' className='cursor-pointer h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600' />
                    </div>
                    <div className="flex-1 flex">
                      <label htmlFor="remember" className='cursor-pointer'>
                        Anda menyetujui Syarat dan Ketentuan
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mt-5 grid justify-center">
                <Link to="/" className="text-blue-500 hover:underline">
                <button className='w-80 h-12 border-2 bg-transparent text-white font-semibold rounded-md hover:bg-white hover:text-black ease-out duration-200'>
                    Daftar
                  </button>
                </Link>
                </div>
                <div className="mt-5 flex justify-center">
                  <div className="w-80 flex">
                    <div className="flex-1 grid items-center">
                      <hr />
                    </div>
                    <div className="px-5">
                      Atau
                    </div>
                    <div className="flex-1 grid items-center">
                      <hr />
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex justify-center">
                  <div className="w-80 flex text-3xl">
                    <div className="flex-1 grid items-center justify-end">
                      <div className="w-10 h-10 border rounded-md flex justify-center items-center bg-white">
                        <FcGoogle />
                      </div>
                    </div>
                    <div className="flex-1 grid items-center justify-center">
                      <div className="w-10 h-10 border rounded-md flex justify-center items-center bg-white">
                        <FaXTwitter className='text-black text-2xl' />
                      </div>
                    </div>
                    <div className="flex-1 grid items-center">
                      <div className="w-10 h-10 border rounded-md flex justify-center items-center bg-white">
                        <FaFacebookF className='text-facebook text-2xl' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex justify-center">
                  Sudah memiliki akun? <Link to={'/masuk'}>&thinsp;Masuk</Link>
                </div>
              </form>
            </div>
            <div className='hidden md:flex-1 md:ps-10 md:block'>
              <img src="/images/imgdaftar.png" alt="" className=' rounded-l-[50px]' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
