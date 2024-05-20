import React, { useState } from 'react';
import ImageLog from '../assets/image/imgdaftar.png'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Daftar() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  
  return (
    <div className='grid grid-cols-2 bg-fifth'>
        <div className='px-[100px] py-[150px]'>
          <h1 className='font-bold text-6xl text-white whitespace-nowrap'>DAFTAR SEKARANG</h1>
          <h2 className='text-[26px] text-white'>Mempelajari lebih lanjut tentang Seni</h2>
          <form>
            <div class="relative w-full mt-10">
              <input type='email' placeholder="Masukkan alamat email anda"
                class="peer h-full w-full border-b border-white bg-transparent pt-4 pb-1.5 font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 disabled:border-0" />
              <label
                class="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-xl font-medium leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-white peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 ">
                Email
              </label>
            </div>
            <div class="relative w-full mt-10">
              <input type='text' placeholder="Masukkan username anda"
                class="peer h-full w-full border-b border-white bg-transparent pt-4 pb-1.5 font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 disabled:border-0" />
              <label
                class="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-xl font-medium leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-white peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 ">
                Username
              </label>
            </div>
            <div className="relative w-full mt-10">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="peer h-full w-full border-b border-white bg-transparent pt-4 pb-1.5 font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 disabled:border-0"
              />
              <label
                className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-xl font-medium leading-tight text-white transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-white peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100"
              >
                Password
              </label>
              <button
                type="button"
                className="absolute right-0 top-4 text-white"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className='mt-9 flex justify-center'>
              <div className='flex gap-2'>
                  <input type="checkbox" className='w-6 h-6'/>
                  <p className='font-medium text-sm text-white'>Dengan membuat akun, Anda menyetujui Syarat dan Ketentuan</p>  
              </div>
            </div>
            <div className=' flex justify-center mt-9'>
              <button className='w-3/4 bg-white px-[18px] py-2 rounded-[9px] font-bold hover:bg-secondary/50 text-black'>
                  Daftar
              </button>
            </div>
            <div className='flex items-center gap-4 justify-center mt-6'>
                <svg width="135" height="2" viewBox="0 0 135 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.554688 0.999986L134.508 1.00001" stroke="white" stroke-width="2"/>
                </svg>
                <p className='text-white font-medium text-sm'>Atau</p>
                <svg width="135" height="2" viewBox="0 0 135 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.554688 0.999986L134.508 1.00001" stroke="white" stroke-width="2"/>
                </svg>
            </div>
            <div className='flex gap-4 justify-center mt-6'>
              <svg width="54" height="51" viewBox="0 0 54 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.957031" width="52.551" height="51" rx="12" fill="white"/>
              <path d="M42.0727 25.8446C42.0727 24.5702 41.9717 23.6402 41.753 22.6758H27.5352V28.4279H35.8807C35.7125 29.8574 34.8039 32.0102 32.7848 33.4568L32.7565 33.6494L37.2519 37.214L37.5634 37.2458C40.4237 34.5419 42.0727 30.5635 42.0727 25.8446Z" fill="#4081EC"/>
              <path d="M27.5359 41.0008C31.6245 41.0008 35.0569 39.623 37.5641 37.2464L32.7855 33.4574C31.5068 34.3702 29.7905 35.0074 27.5359 35.0074C23.5313 35.0074 20.1325 32.3036 18.9209 28.5664L18.7434 28.5818L14.0689 32.2846L14.0078 32.4586C16.498 37.5219 21.6131 41.0008 27.5359 41.0008Z" fill="#32A350"/>
              <path d="M18.921 28.5656C18.6013 27.6012 18.4163 26.5678 18.4163 25.5C18.4163 24.4322 18.6013 23.3989 18.9041 22.4345L18.8957 22.2291L14.1627 18.4668L14.0078 18.5422C12.9815 20.6433 12.3926 23.0028 12.3926 25.5C12.3926 27.9973 12.9815 30.3566 14.0078 32.4578L18.921 28.5656Z" fill="#F3B605"/>
              <path d="M27.5359 15.9933C30.3794 15.9933 32.2975 17.2505 33.3912 18.3011L37.665 14.03C35.0402 11.5328 31.6245 10 27.5359 10C21.6131 10 16.498 13.4789 14.0078 18.5422L18.9041 22.4344C20.1325 18.6972 23.5313 15.9933 27.5359 15.9933Z" fill="#E34133"/>
              </svg>
              <svg width="54" height="51" viewBox="0 0 54 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.964844" width="52.551" height="51" rx="12" fill="white"/>
              <path d="M33.8541 15H37.3809L29.6758 23.8954L38.7402 36H31.6429L26.084 28.6586L19.7233 36H16.1944L24.4357 26.4854L15.7402 15H23.0177L28.0425 21.7103L33.8541 15ZM32.6163 33.8677H34.5705L21.9558 17.0203H19.8587L32.6163 33.8677Z" fill="#1A1A1A"/>
              </svg>
              <svg width="54" height="51" viewBox="0 0 54 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.941406" width="52.551" height="51" rx="12" fill="white"/>
              <path d="M31.6836 17.15H34.2168V13.175C32.9903 13.0567 31.7579 12.9983 30.5248 13C26.8597 13 24.3535 15.075 24.3535 18.875V22.15H20.2168V26.6H24.3535V38H29.3121V26.6H33.4353L34.0551 22.15H29.3121V19.3125C29.3121 18 29.6894 17.15 31.6836 17.15Z" fill="#3F57AB"/>
              </svg>
            </div>
            <div className='mt-5'>
              <p className='flex justify-center text-white text-sm'>
               Sudah punya akun ? 
              <Link to="/masuk" className="text-white underline ml-1">
                Masuk
              </Link>
              </p>
            </div>
          </form>
        </div>
        <img alt='image' src={ImageLog}/>
    </div>
  )
}
