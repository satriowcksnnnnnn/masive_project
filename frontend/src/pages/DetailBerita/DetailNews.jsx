import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DetailBerita from '../../component/DetailBerita';
import Footer from '../../component/Footer';
import Navbar from '../../component/Navbar';

export default function DetailNews() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const [berita, setBerita] = useState({});

  console.log(id);

  useEffect(() => {
    if (id) {
      getBerita();
    }

    async function getBerita() {
      try {
        const response = await fetch(
          'http://localhost:7539/admin/daftar-berita/' + id
        );

        const result = await response.json();

        setBerita(result.berita);
      } catch (error) {
        alert('terjadi kesalahan saat mengambil data berita');
      }
    }
  }, [id]);

  return (
    <>
      <Navbar />
      <DetailBerita {...berita[0]} />
      <Footer />
    </>
  );
}
