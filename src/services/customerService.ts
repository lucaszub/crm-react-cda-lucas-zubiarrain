import axios from 'axios';
import { getApiUrl } from '../config/api'; // Importer la fonction

export const getCustomers = async () => {
  try {
    const response = await axios.get(getApiUrl('/customers/list')); // Utiliser getApiUrl pour ajouter la route
    return response.data;
  } catch (error) {
    console.error("Error fetching customers", error);
    throw error;
  }
};

// export const createCustomer = async (customer: { name: string; email: string; phone: string }) => {
//   try {
//     const response = await axios.post(getApiUrl('/customers/create'), customer); // Route d'ajout
//     return response.data;
//   } catch (error) {
//     console.error("Error creating customer", error);
//     throw error;
//   }
// };
