import React from 'react'
import Image from '../assets/image/Heroimg2.png'

export default function Hero() {
    const containerStyle = {
        background: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
     };
    return (
    <div>  
        <div style={containerStyle}>
            <div className='flex flex-col justify-center items-center pt-[180px]'>
                <h1 className='text-third font-semibold text-[45px] pt-[166px] ml-20'>
                    Jelajahi kreativitas dengan koleksi galeri kami
                </h1>
                <p className='text-white font-medium text-base w-[567px] h-[72px] ml-20 text-center'>
                    Pada platform kami ini akan menampilkan banyak sekali edukasi seni untuk anda dapat pelajari lebih detail. Dan tentunya menjadi platform yang selalu update, bagi kebutuhan anda
                </p>   
            </div>
        </div>
    </div>

  )
}
