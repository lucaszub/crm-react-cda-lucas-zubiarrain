"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { MoreHorizontal } from "lucide-react"
import { ArrowUpDown } from "lucide-react"
// import { Checkbox } from "@/components/ui/checkbox"// This type is used to define the shape of our data.
import { Customer } from "@/types/customerTypes"


export const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: "id_customer",
    header: "id_customer",
  },
  {
    accessorKey: "nom",
    header:"Nom",
  },
  {
    accessorKey: "prenom",
    header:"Prénom",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "phone",
    header:"Numéro"
  },
 
  {
    accessorKey: "adress",
    header:"address"
  },
  {
    accessorKey: "registration_date",
    header:"registration_date"
  },
 
 
]
