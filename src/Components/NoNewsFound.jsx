import React from "react";

const NoNewsFound = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <p className="text-2xl font-bold text-gray-800 mb-4">
          Tidak ada berita yang ditemukan
        </p>
        <p className="text-gray-600">
          Maaf, kami tidak dapat menemukan berita yang sesuai dengan kriteria
          Anda.
        </p>
      </div>
    </div>
  );
};

export default NoNewsFound;
