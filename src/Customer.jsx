import React, { useState, useEffect } from 'react';

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const response = await fetch('../public/Cust.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchCustomers();
  }, []);

  return (
    <div>
      <h2>Customer List</h2>
      <ul className='grid grid-cols-3'>
        {customers.map(customer => (
          <li key={customer.id}>
            <div className="m-10 max-w-sm">
  <div className="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
    <div className="relative mx-auto w-36 rounded-full">
      <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
      <img className="mx-auto h-auto w-full rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
    </div>
    <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">{customer.customerName}</h1>
    <h3 className="font-lg text-semibold text-center leading-6 text-gray-600">Marketing Exec. at Denva Corp</h3>
    <p className="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">{customer.detail_text}</p>
    <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
      
      <li className="flex items-center py-3 text-sm">
        <span>Joined On</span>
        <span className="ml-auto">{customer.join_date}</span>
      </li>
    </ul>
  </div>
</div>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerList;
