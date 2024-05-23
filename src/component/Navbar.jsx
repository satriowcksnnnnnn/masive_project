import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()
    const [activeRoute, setActiveRoute] = useState(window.location.pathname)

    useEffect(() => {
        const navbar = document.getElementById('navbar');
        const handleScroll = () => {
            if (window.scrollY > 0) {
                navbar.classList.add('navbar-shadow');
            } else {
                navbar.classList.remove('navbar-shadow');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleRouteChange = () => {
            setActiveRoute(window.location.pathname);
        };
        window.addEventListener('popstate', handleRouteChange);
        return () => {
            window.removeEventListener('popstate', handleRouteChange);
        };
    }, []);

    return (
        <nav className='fixed flex justify-between px-[100px] py-5 w-full items-center bg-black' id='navbar'>
            <img src={Logo} alt="Logo" width={50} />
            <ul className='flex gap-6 items-center text-white text-sm'>
                <Link to="/" className={activeRoute === '/' ? 'font-semibold' : ''}>Beranda</Link>
                <Link to="/pelajari" className={activeRoute === '/pelajari' ? 'font-semibold' : ''}>Pelajari</Link>
                <Link to="/koleksi" className={activeRoute === '/koleksi' ? 'font-semibold' : ''}>Koleksi</Link>
                <Link to='/agenda' className={activeRoute === '/agenda' ? 'font-semibold' : ''}>Agenda</Link>
                <Link to='/berita' className={activeRoute === '/berita' ? 'font-semibold' : ''}>Berita</Link>
                <Link to='/ulasan' className={activeRoute === '/ulasan' ? 'font-semibold' : ''}>Ulasan</Link>
                <button onClick={() => navigate('/masuk')} className='bg-white px-[18px] py-2 rounded-[9px] hover:bg-gray-300 text-black ease-in-out duration-200 font-semibold'>
                    Masuk
                </button>
                <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.4959 19.0204L20.6274 14.7368C20.4077 14.5435 20.1098 14.4361 19.7973 14.4361H19.0013C20.3491 12.9194 21.1499 11.0118 21.1499 8.93663C21.1499 4 16.6037 0 10.9929 0C5.38217 0 0.835938 4 0.835938 8.93663C0.835938 13.8733 5.38217 17.8733 10.9929 17.8733C13.3515 17.8733 15.5196 17.1686 17.2434 15.9828V16.6831C17.2434 16.9581 17.3655 17.2202 17.5852 17.4135L22.4537 21.6971C22.9128 22.101 23.655 22.101 24.1091 21.6971L25.4911 20.4812C25.9501 20.0773 25.9501 19.4243 25.4959 19.0204ZM10.9929 14.4361C7.54053 14.4361 4.74247 11.9785 4.74247 8.93663C4.74247 5.89903 7.53565 3.43716 10.9929 3.43716C14.4453 3.43716 17.2434 5.89474 17.2434 8.93663C17.2434 11.9742 14.4502 14.4361 10.9929 14.4361Z" fill="white" />
                </svg>
            </ul>
        </nav>
    )
}