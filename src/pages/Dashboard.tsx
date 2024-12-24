import React from "react";
import { DataTable } from "../components/data table/data-table";
import { columns } from "../components/data table/columns";
import { Payment } from "../components/data table/columns";

interface DashboardProps {
  data: Payment[];
}

export const DashboardPage: React.FC<DashboardProps> = ({ data }) => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="">
        {/* Affichage du tableau avec les colonnes et les données */}
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};
