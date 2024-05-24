import React from 'react';
import '../assets/styles/formulir.css'

import { LuUpload } from "react-icons/lu";

export default function Formulir() {
    return (
        <>
            <div className="bg-black w-full">
                <div className='pt-[170px] pb-[110px]'>
                    <div className='text-4xl text-white text-center font-semibold mb-16'>
                        Formulir Pengajuan Upload Karya
                    </div>
                    <div className='grid grid-cols-2 container'>
                        <div className="px-20">
                            <div className="sm:col-span-4">
                                <div className="mb-7">
                                    <input id="" name="" type="text" placeholder='Nama Lengkap' autoComplete="" className="input-form w-full rounded-md py-[12px] px-[20px] text-white" />
                                </div>
                                <div className="mb-7">
                                    <input id="" name="" type="email" placeholder='Email' autoComplete="" className="input-form w-full rounded-md py-[12px] px-[20px] text-white" />
                                </div>
                                <div className="mb-7">
                                    <input id="" name="" type="text" placeholder='Nomor HP' autoComplete="" className="input-form w-full rounded-md py-[12px] px-[20px] text-white" />
                                </div>
                                <div className="mb-7">
                                    <input id="" name="" type="date" placeholder='Tanggal Lahir' autoComplete="" className="input-form w-full rounded-md py-[12px] px-[20px] text-white custom-date-input" />
                                </div>
                                <div className="mb-7">
                                    <textarea id="" name="" type="text" placeholder='Alamat' autoComplete="" className="input-form w-full rounded-md py-[12px] px-[20px] text-white" />
                                </div>
                                <div className="mb-7">
                                    <input id="" name="" type="text" placeholder='Judul Karya' autoComplete="" className="input-form w-full rounded-md py-[12px] px-[20px] text-white" />
                                </div>
                                <div className="">
                                    <textarea id="" name="" type="text" placeholder='Deskripsi Karya' autoComplete="" className="input-form w-full rounded-md py-[12px] px-[20px] text-white" />
                                </div>
                            </div>
                        </div>
                        <div className="grid items-center justify-center">
                            <label htmlFor="file-upload">
                                <span>
                                    <div className='text-white text-center border h-96 w-96 grid rounded-xl cursor-pointer'>
                                        <div className='grid justify-center items-end text-4xl mb-5'>
                                            <LuUpload />
                                        </div>
                                        <div className='grid items-start px-16'>
                                            Unggah dokumen yang berisi karya Anda
                                        </div>
                                    </div>
                                </span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}