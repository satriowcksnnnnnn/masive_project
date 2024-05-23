import React from 'react'
import Museum from '../assets/image/Museum.png'

export default function Pelajari() {
  return (
        <div className='bg-black px-28 '>
            <div className=' flex flex-row gap-[25px] justify-between pt-[131px] pb-[180px]'>
                <div className='text-[50px] font-bold w-[600px]'>
                    <h1 className='text-third'>
                        PROFIL BLU MUSEUM NASIONAL
                    </h1>
                    <p className='text-white text-[20px] font-semibold text-justify text-base'>
                    Mengingat pentingnya museum ini bagi bangsa Indonesia maka pada tanggal 17 September 1962 
                    Lembaga Kebudayaan Indonesia menyerahkan pengelolaan museum kepada pemerintah Indonesia, 
                    yang kemudian menjadi Museum Pusat. Akhirnya, berdasarkan Surat Keputusan Menteri Pendidikan 
                    dan Kebudayaan, No.092/ 0/1979 tertanggal 28 Mei 1979, Museum Pusat ditingkatkan statusnya
                    menjadi Museum Nasional. Hingga saat ini Museum nasional menyimpan 190.000an benda-benda 
                    bernilai sejarah yang terdiri dari 7 jenis koleksi yakni Prasejarah, Arkeologi masa Klasik 
                    atau Hindu – Budha; Numismatik dan Heraldik; Keramik; Etnografi, Geografi dan Sejarah. 
                    Kompleks Museum Nasional dibangun di atas tanah seluas 26.500 meter persegi dan hingga 
                    saat ini mempunyai 2 gedung. Gedung A digunakan untuk ruang pamer dan wahana Imersifa. 
                    Sedangkan Gedung B, dikenal pula dengan sebutan Gedung Arca, yang dibuka secara resmi
                    pada tanggal 20 Juni 2007 oleh Presiden Susilo Bambang Yudhoyono selain digunakan 
                    untuk pameran juga digunakan untuk kantor, ruang konferensi, laboratorium, 
                    ruang pameran temporer, area komersil dan perpustakaan. Museum Nasional 
                    telah dilengkapi pula dengan gedung penyimpanan atau storage untuk menyimpan benda-benda budaya.
                    </p>
                </div>
                <div>
                    <img src={Museum} w-full/>
                    <p className='text-white text-2xl font-semibold text-center pt-6'>
                    Museum Nasional Indonesia
                    </p>
                </div>
            </div>
        </div>
  )
}
