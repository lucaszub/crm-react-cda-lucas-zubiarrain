// Exemple de type pour un client
export interface Customer {
    id_customer: number;
    nom: string;
    prenom:string;
    email: string;
    phone: string;
    address: string;
    registration_date: string;
  }

export interface CustomerPost{
  nom: string;
  prenom: string;
  email: string;
  phone: string;
  address: string;
}
  
