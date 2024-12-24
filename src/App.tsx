import React, { useEffect, useState } from "react";
import { AppSidebar } from "./components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Payment } from "./components/data table/columns";
// import { DataTable } from "./components/data table/data-table";
import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/Dashboard";
import { HomePage } from "./pages/Home";

// Fonction pour récupérer des données
async function getData(): Promise<Payment[]> {
  return [
    { id: "1", amount: 100, status: "pending", email: "test1@example.com" },
    { id: "2", amount: 200, status: "success", email: "test2@example.com" },
    { id: "3", amount: 300, status: "failed", email: "test3@example.com" },
    { id: "1", amount: 100, status: "pending", email: "test1@example.com" },
    { id: "2", amount: 200, status: "success", email: "test2@example.com" },
    { id: "3", amount: 300, status: "failed", email: "test3@example.com" },
    { id: "1", amount: 100, status: "pending", email: "test1@example.com" },
    { id: "2", amount: 200, status: "success", email: "test2@example.com" },
    { id: "3", amount: 300, status: "failed", email: "test3@example.com" },
    { id: "1", amount: 100, status: "pending", email: "test1@example.com" },
    { id: "2", amount: 200, status: "success", email: "test2@example.com" },
    { id: "3", amount: 300, status: "failed", email: "test3@example.com" },
  ];
}

const App: React.FC = () => {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
                <HomePage />
              </div>
            }
          />
          <Route
            path="/dashboard"
            element={
              <div className="">
                <DashboardPage data={data} />
              </div>
            }
          />
        </Routes>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default App;
