import React, { useEffect, useState } from "react";
import { DataTable } from "@/components/customertable/data-table";
import { columns } from "../components/customertable/columns";

import { getCustomers } from "@/services/customerService";
import { Customer } from "@/types/customerTypes";

export const DashboardPage: React.FC = () => {
  const [data, setData] = useState<Customer[]>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const rawData = await getCustomers(); // Appel API pour récupérer les données

        // Mapper les données pour correspondre au type Customer si nécessaire
        const mappedData = rawData.map((entry: any) => ({
          id: entry.id_customer, // Exemple de transformation
          name: entry.name,
          email: entry.email,
          adress: entry.adress,
          phone: entry.phone,
          registration_date: entry.registration_date,
         

          // Ajoute d'autres propriétés nécessaires ici
        }));

        setData(mappedData); // Mise à jour du state avec les données transformées
        console.log(mappedData)
      } catch (error) {
        console.error("Erreur lors de la récupération des clients:", error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-4">Client</h1>
      <div className="">
        {/* Affichage du tableau avec les colonnes et les données */}
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};
