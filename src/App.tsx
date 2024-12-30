import React from "react";
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
import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/Dashboard";
import { HomePage } from "./pages/Home";
import Invoice from "./pages/Invoice";
import MyCalendar from "./pages/Calendar";


const App: React.FC = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-1 flex-col gap-4 p-4 pt-0 border">
        <header className="flex h-16 shrink-0 items-center transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 gap-2 border-b px-4 ">
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
            path="/Client"
            element={
              <div className="">
                <DashboardPage />
              </div>
            }
          />
          <Route
            path="/Facture"
            element={
              <div className="">
                <Invoice />
              </div>
            }
          />
          <Route
            path="/Calendar"
            element={
              <div className="">
                <MyCalendar/>
              </div>
            }
          />
       
        </Routes>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default App;
