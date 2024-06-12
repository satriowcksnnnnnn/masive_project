import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Admin() {
  const navigate = (url) => {
    window.location.href = url;
  };

  return (
    <div className="px-28">
      <div className="text-white mt-10 text-[45px] font-bold">Admin</div>
      <div className="relative mt-4">
        <input
          type="search"
          placeholder=""
          className="rounded-lg text-xs lg:text-xl pl-4 pr-10 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <FaSearch className="text-gray-500" />
        </div>
      </div>
      <div className="bg-white rounded-sm mt-6 p-4 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jenis Karya</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal Lahir</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alamat</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Judul Karya</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-2 whitespace-nowrap">
                <img src="images/user-com.png" className="rounded-full w-10 h-10" alt="User" />
              </td>
              <td className="px-4 py-2 whitespace-nowrap">Agil Arya</td>
              <td className="px-4 py-2 whitespace-nowrap">Agilarya@gmail.com</td>
              <td className="px-4 py-2 whitespace-nowrap">Lukisan</td>
              <td className="px-4 py-2 whitespace-nowrap">22 Januari 1999</td>
              <td className="px-4 py-2 whitespace-nowrap">Jakarta</td>
              <td className="px-4 py-2 whitespace-nowrap">-</td>
              <td className="px-4 py-2 whitespace-nowrap">Terverifikasi</td>
              <td className="px-4 py-2 whitespace-nowrap">
                <button
                  onClick={() => navigate('/masuk')}
                  className="bg-white px-[18px] py-2 rounded-[9px] hover:bg-gray-300 text-black border-2 border-black ease-in-out duration-200 font-semibold"
                >
                  buka
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 whitespace-nowrap">
                <img src="images/user-com.png" className="rounded-full w-10 h-10" alt="User" />
              </td>
              <td className="px-4 py-2 whitespace-nowrap">Agil Arya</td>
              <td className="px-4 py-2 whitespace-nowrap">Agilarya@gmail.com</td>
              <td className="px-4 py-2 whitespace-nowrap">Lukisan</td>
              <td className="px-4 py-2 whitespace-nowrap">22 Januari 1999</td>
              <td className="px-4 py-2 whitespace-nowrap">Jakarta</td>
              <td className="px-4 py-2 whitespace-nowrap">-</td>
              <td className="px-4 py-2 whitespace-nowrap">Terverifikasi</td>
              <td className="px-4 py-2 whitespace-nowrap">
                <button
                  onClick={() => navigate('/masuk')}
                  className="bg-white px-[18px] py-2 rounded-[9px] hover:bg-gray-300 text-black border-2 border-black ease-in-out duration-200 font-semibold"
                >
                  buka
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
