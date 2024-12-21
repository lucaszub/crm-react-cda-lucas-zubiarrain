// columns.tsx

import { ColumnDef } from "@tanstack/react-table"

// Définition des colonnes pour les paiements
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",  // La clé pour accéder à la colonne "status" des données
    header: "Status",       // Le titre de la colonne
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
]
