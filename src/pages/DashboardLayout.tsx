import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Component } from "@/components/barchart";
import { Table, TableRow, TableCell, TableHead, TableBody } from "@/components/ui/table";

const DashboardLayout = () => {
  return (
    <div className="p-6 h-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-4 gap-4">
      {/* Graphique en haut à gauche (2 colonnes x 2 lignes sur md+) */}
      <div className="col-span-1 sm:col-span-2 row-span-2 h-full w-full">
        <Component />
      </div>

      {/* KPI 1 */}
      <div className="flex flex-col justify-center">
        <Card className="flex flex-col justify-center h-full w-full overflow-hidden">
          <CardHeader>
            <CardTitle className="text-sm">Nombre total de clients</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold">150</p>
          </CardContent>
        </Card>
      </div>

      {/* KPI 2 */}
      <div className="flex flex-col justify-center">
        <Card className="flex flex-col justify-center h-full w-full overflow-hidden">
          <CardHeader>
            <CardTitle className="text-sm">Opportunités ouvertes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold">25</p>
          </CardContent>
        </Card>
      </div>

      {/* KPI 3 */}
      <div className="flex flex-col justify-center">
        <Card className="flex flex-col justify-center h-full w-full overflow-hidden">
          <CardHeader>
            <CardTitle className="text-sm">Taux de conversion moyen</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold">40%</p>
          </CardContent>
        </Card>
      </div>

      {/* KPI 4 */}
      <div className="flex flex-col justify-center">
        <Card className="flex flex-col justify-center h-full w-full overflow-hidden">
          <CardHeader>
            <CardTitle className="text-sm">Interactions récentes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold">120</p>
          </CardContent>
        </Card>
      </div>

      {/* Tableau CRM dans la dernière card */}
      <div className="col-span-1 sm:col-span-2 md:col-span-4 row-span-2 h-full w-full">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-lg">Liste des clients</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table className="min-w-full border">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Nom</TableCell>
                  <TableCell>Entreprise</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Téléphone</TableCell>
                  <TableCell>Statut</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Jean Dupont</TableCell>
                  <TableCell>ABC Corp</TableCell>
                  <TableCell>jean.dupont@abc.com</TableCell>
                  <TableCell>+33 6 12 34 56 78</TableCell>
                  <TableCell className="text-green-500 font-semibold">Actif</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>Marie Curie</TableCell>
                  <TableCell>XYZ Tech</TableCell>
                  <TableCell>marie.curie@xyz.com</TableCell>
                  <TableCell>+33 7 98 76 54 32</TableCell>
                  <TableCell className="text-yellow-500 font-semibold">En attente</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>Albert Einstein</TableCell>
                  <TableCell>Physics Labs</TableCell>
                  <TableCell>albert.einstein@physicslabs.com</TableCell>
                  <TableCell>+33 1 23 45 67 89</TableCell>
                  <TableCell className="text-red-500 font-semibold">Inactif</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>4</TableCell>
                  <TableCell>Isaac Newton</TableCell>
                  <TableCell>Gravity Inc</TableCell>
                  <TableCell>isaac.newton@gravity.com</TableCell>
                  <TableCell>+33 6 98 76 12 34</TableCell>
                  <TableCell className="text-green-500 font-semibold">Actif</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardLayout;
