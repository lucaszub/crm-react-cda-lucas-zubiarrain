// page.tsx

import { Payment, columns } from "./columns"  // Import des colonnes et du type Payment
import { DataTable } from "./data-table"      // Import du composant DataTable

// Fonction pour récupérer des données, ici des données statiques pour l'exemple
async function getData(): Promise<Payment[]> {
  return [
    { id: "1", amount: 100, status: "pending", email: "test1@example.com" },
    { id: "2", amount: 200, status: "success", email: "test2@example.com" },
    { id: "3", amount: 300, status: "failed", email: "test3@example.com" },
  ]
}

// Composant principal pour afficher la page avec le tableau
export default async function Page() {
  // Récupère les données depuis getData
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />  {/* Affichage du tableau */}
    </div>
  )
}
