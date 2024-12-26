import React, { useEffect, useState } from "react";
import { DataTable } from "../components/data table/data-table";
// import { columns, Payment } from "../components/data table/columns";
import { columns, CustomerType  } from "../components/customertable/columns";
// import customerfromfilte from "../services/data/customer.json"; // Import JSON
import customerfromfilte from "../services/data/customer2.json"; // Import JSON
// 
export const DashboardPage: React.FC = () => {
  // const [data, setData] = useState<Payment[]>([]);
  const [data, setData] = useState<CustomerType[]>([]);

  // useEffect(() => {
  //   // Transformation des données pour garantir leur conformité au type `Payment`
  //   const parsedData: Payment[] = customerfromfilte.map((entry) => ({
  //     ...entry,
  //     status: entry.status as "pending" | "processing" | "success" | "failed",
  //   }));

  //   setTimeout(() => {
  //     setData(parsedData); // Utilisation des données corrigées
  //   }, 200);
  // }, []);
  useEffect(() => {
    // Transformation des données pour garantir leur conformité au type `Payment`
    const parsedData: CustomerType[] = customerfromfilte.map((entry) => ({
      ...entry,
    }));

    setTimeout(() => {
      setData(parsedData); // Utilisation des données corrigées
    }, 200);
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
