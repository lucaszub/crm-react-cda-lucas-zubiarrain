import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-100  h-screen flex flex-col">
      <div className="p-4 text-2xl font-bold">Nom entreprise</div>
      <nav className="flex-1">
        <ul>
          <li className="p-4 hover:bg-white cursor-pointer">Dashboard</li>
          <li className="p-4 hover:bg-white cursor-pointer">Clients</li>
          <li className="p-4 hover:bg-white cursor-pointer">Paramètres</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
