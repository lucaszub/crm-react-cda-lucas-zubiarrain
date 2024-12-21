import { AppSidebar } from "./components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { TableDemo } from "./components/table-test"
import { Card } from "./components/ui/card"
import { Payment, columns } from "./components/data table/columns"
import { DataTable } from "./components/data table/data-table"
import React, { useEffect, useState } from "react"
import Basictable from "./components/basictable/tablebasic"

// Fonction pour récupérer des données
async function getData(): Promise<Payment[]> {
  return [
    { id: "1", amount: 100, status: "pending", email: "test1@example.com" },
    { id: "2", amount: 200, status: "success", email: "test2@example.com" },
    { id: "3", amount: 300, status: "failed", email: "test3@example.com" },
    { id: "1", amount: 100, status: "pending", email: "test1@example.com" },
    { id: "2", amount: 200, status: "success", email: "test2@example.com" },
    { id: "3", amount: 300, status: "failed", email: "test3@example.com" },
  ]
}

const App: React.FC = () => {
  // Déclare un état pour les données
  const [data, setData] = useState<Payment[]>([])

  // Utilise useEffect pour charger les données lors du montage du composant
  useEffect(() => {
    const fetchData = async () => {
      const result = await getData()
      setData(result) // Mettre à jour l'état avec les données récupérées
    }

    fetchData()
  }, []) // L'effet ne se déclenche qu'une fois lors du montage du composant

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
              <div className="">
                {/* <Card className="p-5 bg-muted/50 mr-5">
                  <TableDemo />
                </Card> */}

                <div className="container mx-auto py-10">
                  {/* Affichage du tableau avec les colonnes et les données */}
                  <DataTable columns={columns} data={data} />
                </div>
                <Basictable />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}

export default App
