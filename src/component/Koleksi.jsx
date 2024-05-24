import React, { useState } from 'react';
import Koleksi1 from '../assets/image/koleksi1.png'
import Koleksi2 from '../assets/image/koleksi2.png'
import Koleksi3 from '../assets/image/koleksi3.png'
import Koleksi4 from '../assets/image/koleksi4.png'
import Lukisan1 from '../assets/image/lukisan1.png'
import Lukisan2 from '../assets/image/lukisan2.png'
import Lukisan3 from '../assets/image/lukisan3.png'
import Lukisan4 from '../assets/image/lukisan4.png'
import Lukisan5 from '../assets/image/lukisan5.png'
import Lukisan6 from '../assets/image/lukisan6.png'
import Batik1 from '../assets/image/batik1.png'
import Batik2 from '../assets/image/batik2.png'
import Batik3 from '../assets/image/batik3.png'
import Batik4 from '../assets/image/batik4.png'
import Batik5 from '../assets/image/batik5.png'
import Batik6 from '../assets/image/batik6.png'
import Kerajinan1 from '../assets/image/kerajinan1.png'
import Kerajinan2 from '../assets/image/kerajinan2.png'
import Kerajinan3 from '../assets/image/kerajinan3.png'
import Kerajinan4 from '../assets/image/kerajinan4.png'
import Kerajinan5 from '../assets/image/kerajinan5.png'
import Kerajinan6 from '../assets/image/kerajinan6.png'
import Seniman1 from '../assets/image/seniman1.png'
import Seniman2 from '../assets/image/seniman2.png'
import Seniman3 from '../assets/image/seniman3.png'
import Seniman4 from '../assets/image/seniman4.png'
import Seniman5 from '../assets/image/seniman5.png'
import Seniman6 from '../assets/image/seniman6.png'

export default function Koleksi() {
  const [activeTab, setActiveTab] = useState('popular');

  const populer = [
    {
      id: 1,
      title: "POHON DAN ANDONG",
      image: Koleksi1,
    },
    {
      id: 2,
      title: "KAWUNG DAN TUMPAL",
      image: Koleksi2,
    },
    {
      id: 3,
      title: "POTRET DIRI",
      image: Koleksi3,
    },
    {
      id: 4,
      title: "AFANDI KOESOEMA",
      image: Koleksi4,
    }
  ]
  const lukisan = [
    {
      id : 1,
      title : 'Potret Diri',
      img :   Koleksi3,
    },
    {
      id : 2,
      title : 'Barong Bali',
      img : Lukisan2,
    },
    {
      id : 3,
      title : 'Kampung Nelayan',
      img : Lukisan3,
    },
    {
      id : 4,
      title : 'Title 1',
      img : Lukisan4,
    },
    {
      id : 5,
      title : 'Title 2',
      img : Lukisan5,
    },
    {
      id : 6,
      title : 'Title3',
      img : Lukisan6,
    }
  ]
  const batik = [ 
    {
      id : 1,
      title : 'Hewan Darat dan Udara',
      img :   Batik1,
    },
    {
      id : 2,
      title : 'Kawung dan Tumpal',
      img :   Batik2,
    },
    {
      id : 3,
      title : 'Tumbuhan Deret',
      img :   Batik3,
    },
    {
      id : 4,
      title : 'Title 1',
      img :   Batik4,
    },
    {
      id : 5,
      title : 'Title 2',
      img :   Batik5,
    },
    {
      id : 6,
      title : 'Title 3',
      img :   Batik6,
    },
  ]
  const kerajinan = [
    {
      id : 1,
      title : 'Hewan Darat dan Udara',
      img :   Kerajinan1,
    },
    {
      id : 2,
      title : 'Kawung dan Tumpal',
      img :   Kerajinan2,
    },
    {
      id : 3,
      title : 'Tumbuhan Deret',
      img :   Kerajinan3,
    },
    {
      id : 4,
      title : 'Title 1',
      img :   Kerajinan4,
    },
    {
      id : 5,
      title : 'Title 2',
      img :   Kerajinan5,
    },
    {
      id : 6,
      title : 'Title 3',
      img :   Kerajinan6,
    },
  ]
  const seniman = [
    {
      id : 1,
      title : 'Afandi Koesoema',
      img :   Seniman1,
      location : 'Indonesia'
    },
    {
      id : 2,
      title : 'Rio Helmi',
      img :   Seniman2,
      location : 'Indonesia'
    },
    {
      id : 3,
      title : 'Saleh Syarif Bustaman',
      img :   Seniman3,
      location : 'Indonesia'
    },
    {
      id : 4,
      title : 'Title 1',
      img :   Seniman4,
      location : 'Indonesia'
    },
    {
      id : 5,
      title : 'Title 2',
      img :   Seniman5,
      location : 'Indonesia'
    },
    {
      id : 6,
      title : 'Title 3',
      img :   Seniman6,
      location : 'Indonesia'
    },
  ]

  return (
    <div className='bg-black w-full'>
      <div className='pt-[170px] pb-[110px]'>
        <div className='font-bold flex justify-between px-28'>
          <h1 className='text-white text-[50px]'>
            Koleksi
          </h1>
          <p className='text-white max-w-xl'>
            Koleksi adalah kumpulan objek atau data dengan tema atau tujuan tertentu, seperti buku-buku di perpustakaan,
            karya seni, data statistik, barang pribadi, desain pakaian, musik, atau dokumen sejarah.
          </p>
        </div>
      </div>
      <div className='px-28'>
        <div className='flex justify-center w-full space-x-4 border-b border-gray-500'>
          <button className={`py-4 px-10 text-[22px] ${activeTab === 'popular' ? 'border-b-2 border-third text-third' : ' text-white'}`} onClick={() => setActiveTab('popular')}>Popular</button>
          <button className={`py-4 px-10 text-[22px] ${activeTab === 'lukisan' ? 'border-b-2 border-third text-third' : ' text-white'}`} onClick={() => setActiveTab('lukisan')}>Lukisan</button>
          <button className={`py-4 px-10 text-[22px] ${activeTab === 'batik' ? 'border-b-2 border-third text-third' : ' text-white'}`} onClick={() => setActiveTab('batik')}>Batik</button>
          <button className={`py-4 px-10 text-[22px] ${activeTab === 'kerajinan' ? ' border-b-2 border-third text-third' : ' text-white'}`} onClick={() => setActiveTab('kerajinan')}>Kerajinan</button>
          <button className={`py-4 px-10 text-[22px] ${activeTab === 'seniman' ? ' border-b-2 border-third text-third' : ' text-white'}`} onClick={() => setActiveTab('seniman')}>Seniman</button>
        </div>
        <div className='mt-10 pb-12 text-white'>
        {activeTab === 'popular' && (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]'>
              {populer.map((populer, index) => (
                <div key={index} className='bg-white rounded-xl'>
                  <div className=''>
                    <img src={populer.image} alt={populer.title} className='w-full h-full object-cover'/>
                    <div className='py-4 px-4'>
                      <p className='text-black text-center font-medium text-[18px]'>
                        {populer.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'lukisan' && 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
            {lukisan.map((lukisan, index) => (
              <div key={index} className='rounded-xl bg-white'>
                <div className=''>
                  <img src={lukisan.img} alt={lukisan.img} className='w-full h-full object-cover' style={{height: 460}}/>
                  <div className='py-4 px-4'>
                    <p className='text-black text-center font-medium text-[18px]'>
                      {lukisan.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          }
          {activeTab === 'batik' && 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
            {batik.map((batik, index) => (
              <div key={index} className='rounded-xl bg-white'>
                <div className=''>
                  <img src={batik.img} alt={batik.img} className='w-full h-full object-cover' style={{height: 460}}/>
                  <div className='py-4 px-4'>
                    <p className='text-black text-center font-medium text-[18px]'>
                      {batik.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          }
          {activeTab === 'kerajinan' && 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
            {kerajinan.map((kerajinan, index) => (
              <div key={index} className='rounded-xl bg-white'>
                <div className=''>
                  <img src={kerajinan.img} alt={kerajinan.img} className='w-full h-full object-cover' style={{height: 460}}/>
                  <div className='py-4 px-4'>
                    <p className='text-black text-center font-medium text-[18px]'>
                      {kerajinan.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          }
          {activeTab === 'seniman' && 
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
           {seniman.map((seniman, index) => (
             <div key={index} className='rounded-xl bg-white'>
               <div className=''>
                 <img src={seniman.img} alt={seniman.img} className='w-full h-full object-cover' style={{height: 460}}/>
                 <div className='py-4 px-4'>
                   <p className='text-black text-center font-medium text-[18px]'>
                     {seniman.title}
                   </p>
                   <p className='text-black text-center font-medium text-[18px]'>
                     {seniman.location}
                   </p>
                 </div>
               </div>
             </div>
           ))}
         </div>
          }
        </div>
      </div>
    </div>
  );
}
