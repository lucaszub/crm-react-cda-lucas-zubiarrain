import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="w-full bg-white shadow-xl p-4 flex justify-between items-center border-b-2">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Profil</button>
      </div>
    </div>
  );
};

export default Navbar;
