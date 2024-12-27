// import { useEffect, useState } from 'react';
// import { getCustomers } from '../services/customerService';
// import { Customer } from '../types/customerTypes';

// const CustomerList = () => {
//   const [customers, setCustomers] = useState<Customer[]>([]);

//   useEffect(() => {
//     const fetchCustomers = async () => {
//       const data = await getCustomers();
//       setCustomers(data);
//     };
//     fetchCustomers();
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h1 className="text-xl font-semibold mb-4">Customer List</h1>
//       <ul className="space-y-2">
//         {customers.map((customer) => (
//           <li key={customer.id_customer} className="p-2 border-b">
//             <h2 className="font-medium">{customer.name}</h2>
//             <p>{customer.email}</p>
//             <p>{customer.phone}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CustomerList;
