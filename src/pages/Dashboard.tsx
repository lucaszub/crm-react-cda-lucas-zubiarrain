import React, { useEffect, useState } from "react";
import { DataTable } from "@/components/customertable/data-table";
import { columns } from "../components/customertable/columns";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter } from "@/components/ui/dialog"; // Import des composants ShadCN UI
import { getCustomers, createCustomer } from "@/services/customerService";
import { Customer, CustomerPost } from "@/types/customerTypes";
import { Input } from "@/components/ui/input";
export const DashboardPage: React.FC = () => {
  const [data, setData] = useState<Customer[]>([]); // Liste des clients
  const [newCustomer, setNewCustomer] = useState<CustomerPost>({
    nom: "",
    prenom: "",
    email: "",
    phone: "",
    address: "", // Correctement typé avec "adress"
  });
  const [isOpen, setIsOpen] = useState(false); // Gérer l'ouverture et la fermeture du popup

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const rawData = await getCustomers(); // Appel API pour récupérer les données
        console.log("Avant le mappage", rawData);

        // Mapper les données pour correspondre au type Customer si nécessaire
        const mappedData = rawData.map((entry: any) => ({
          id_customer: entry.id_customer, // Exemple de transformation
          nom: entry.nom,
          prenom: entry.prenom,
          email: entry.email,
          adress: entry.address,
          phone: entry.phone,
          registration_date: entry.registration_date,
        }));

        setData(mappedData); // Mise à jour du state avec les données transformées
        console.log("Après le mappage", mappedData);
      } catch (error) {
        console.error("Erreur lors de la récupération des clients:", error);
      }
    };

    fetchCustomers();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCustomer((prev) => ({ ...prev, [name]: value })); // Mise à jour des champs du formulaire
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const createdCustomer = await createCustomer(newCustomer);
      setData((prevData) => [...prevData, createdCustomer]); // Ajouter le client à la liste
      setNewCustomer({
        nom: "",
        prenom: "",
        email: "",
        phone: "",
        address: "",
      }); // Réinitialiser le formulaire
      setIsOpen(false); // Fermer le popup après la soumission
    } catch (error) {
      console.error("Erreur lors de la création du client:", error);
    }
  };

  return (
    <div className="p-4">
      <div className="flex flex-row justify-between ">
        <h1 className="text-3xl font-bold mb-4">Client</h1>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
    <div> {/* Conteneur pour regrouper les enfants */}
    <DialogTrigger asChild>
      <Button onClick={() => setIsOpen(true)}>Créer un nouveau client</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <h2 className="text-xl font-semibold">Ajouter un nouveau client</h2>
      </DialogHeader>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="text"
            name="nom"
            placeholder="Nom"
            value={newCustomer.nom}
            onChange={handleInputChange}
            required
          />
          <Input
            type="text"
            name="prenom"
            placeholder="Prénom"
            value={newCustomer.prenom}
            onChange={handleInputChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={newCustomer.email}
            onChange={handleInputChange}
            required
          />
          <Input
            type="text"
            name="phone"
            placeholder="Téléphone"
            value={newCustomer.phone}
            onChange={handleInputChange}
            required
          />
          <Input
            type="text"
            name="address"
            placeholder="Adresse"
            value={newCustomer.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <DialogFooter>
          <Button type="submit" className="mt-4 py-2 px-4">Ajouter le client</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </div>
</Dialog>

      </div>
      <div className="mb-8">
        {/* Affichage du tableau avec les colonnes et les données */}
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};
