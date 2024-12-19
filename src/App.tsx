import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getCustomers } from './services/customerService'; // Importer la fonction getCustomers

function App() {
  const [count, setCount] = useState(0);
  const [customers, setCustomers] = useState<any[]>([]); // État pour stocker les clients
  const [loading, setLoading] = useState<boolean>(false); // Indicateur de chargement
  const [error, setError] = useState<string | null>(null); // Indicateur d'erreur

  useEffect(() => {
    const fetchCustomers = async () => {
      setLoading(true);
      setError(null); // Réinitialiser l'erreur avant l'appel
      try {
        const data = await getCustomers();
        setCustomers(data); // Stocker les clients dans l'état
      } catch (error) {
        setError("Une erreur est survenue lors de la récupération des clients.");
        console.error(error);
      } finally {
        setLoading(false); // Fin du chargement
      }
    };

    fetchCustomers();
  }, []); // Cette fonction sera appelée une seule fois au montage du composant

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Lucas Zubiarrain React app</h1>
      <div>Ceci est un test pour le déploiement</div>
      <div>Autre test 343</div>

      {/* Afficher les clients ou un message de chargement */}
      <div className="card">
        {loading ? (
          <p>Chargement des clients...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <ul>
            {customers.map((customer) => (
              <li key={customer.id_customer}>
                {customer.name} - {customer.email}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
