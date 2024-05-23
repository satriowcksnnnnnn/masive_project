import React from 'react';
import Beritaimg1 from '../assets/image/Beritaimg1.png'

export default function App() {
  return (
    <div className='bg-black w-full min-h-screen '>
      <div className='p-4 '>
        <div className='px-[100px] mt-[130px]'>
        <h1 className='text-white text-[40px] '>
          Kabar Terbaru
        </h1>
        <img src={Beritaimg1}/>
        <p className='text-white mt-5'>
          Pertunjukan Wayang Orang Berjudul ”Pandu Dewanata”
        </p>
        </div>
      </div>
    </div>
  );
}
