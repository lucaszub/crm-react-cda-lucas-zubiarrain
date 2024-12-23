import { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const Basictable = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  ]);
  const [sorted, setSorted] = useState<boolean>(false);

  // Fonction pour trier les utilisateurs par nom
  const sortUsers = () => {
    const sortedUsers = [...users].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setUsers(sortedUsers);
    setSorted(!sorted);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-center mb-4">Liste des utilisateurs</h1>
      
      {/* Bouton de tri avec un peu de style */}
      <div className="text-center mb-4">
        <button
          onClick={sortUsers}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Trier par nom {sorted ? '(Décroissant)' : '(Croissant)'}
        </button>
      </div>

      {/* Tableau avec bordures visibles et coins arrondis */}
      <div className='border rounded-xl'>
      <table className="min-w-full table">
        <thead className="bg-gray-100">
          <tr>
            <th className=" border-black-00 px-4 py-2 text-left rounded-tl-lg">ID</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Nom</th>
            <th className="border border-gray-300 px-4 py-2 text-left rounded-tr-lg">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className=" border-gray-300 px-4 py-2">{user.id}</td>
              <td className="border-t border-l border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border-t border-l- border-gray-300 px-4 py-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Basictable;
