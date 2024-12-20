import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { useEffect, useState } from 'react';
  import { Customer } from '../types/customerTypes';
  import { getCustomers } from '../services/customerService';
  



  export function TableDemo() {
    const [customers, setCustomers] = useState <Customer[]>([]);

    useEffect(() => {
        const fetchCustomers = async () => {
          const data = await getCustomers();
          console.log(data);
          setCustomers(data);
        };
        fetchCustomers();
      }, []);

    return (
        <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead >Id</TableHead>
            <TableHead>name</TableHead>
            <TableHead>email</TableHead>
            <TableHead>phone</TableHead>
            <TableHead>address</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id_customer}>
            <TableCell className="font-medium">{customer.id_customer}</TableCell>
              <TableCell className="font-medium">{customer.name}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell>{customer.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
    
      </div>
      
    )
  }
  