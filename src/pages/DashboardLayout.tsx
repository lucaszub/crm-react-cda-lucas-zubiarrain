import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Component } from "@/components/barchart";

const DashboardLayout = () => {
  return (
    <div className="p-6 h-full w-full grid grid-cols-4 grid-rows-4 gap-4">
      {/* Graphique en haut à gauche (2 colonnes x 2 lignes) */}
      <div className="col-span-2 row-span-2">
        <Component />
      </div>

      {/* KPI 1 */}
      <div className="flex flex-col justify-center h-auto">
        <Card className="flex flex-col justify-center h-[200px]">
          <CardHeader>
            <CardTitle className="text-sm">Nombre total de clients</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold">150</p>
          </CardContent>
        </Card>
      </div>

      {/* KPI 2 */}
      <div className="flex flex-col justify-center h-auto">
        <Card className="flex flex-col justify-center h-[200px]">
          <CardHeader>
            <CardTitle className="text-sm">Opportunités ouvertes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold">25</p>
          </CardContent>
        </Card>
      </div>

      {/* KPI 3 */}
      <div className="flex flex-col justify-center h-auto">
        <Card className="flex flex-col justify-center h-[200px]">
          <CardHeader>
            <CardTitle className="text-sm">Taux de conversion moyen</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold">40%</p>
          </CardContent>
        </Card>
      </div>

      {/* KPI 4 */}
      <div className="flex flex-col justify-center h-auto">
        <Card className="flex flex-col justify-center h-[200px]">
          <CardHeader>
            <CardTitle className="text-sm">Interactions récentes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold">120</p>
          </CardContent>
        </Card>
      </div>

      {/* Autres graphiques ou tableau (sous les KPI) */}
      <div className="col-span-4 row-span-2">
        <Card className="w-full h-[200px] p-3">
          <div className="p-4 bg-gray-100">Autre contenu ici</div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardLayout;
