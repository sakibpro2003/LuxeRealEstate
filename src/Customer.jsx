import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const response = await fetch("/Cust.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchCustomers();
  }, []);

  return (
    <div className="mt-12">
      <Helmet>
        <title>Happy Customer</title>
      </Helmet>
      <h2 className="text-center text-4xl font-bold mb-8">Customer List</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {customers.map((customer) => (
          <li key={customer.id}>
            <div className="m-10">
              <div className="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-2xl">
                <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">
                  {customer.customerName}
                </h1>
                <h3 className="font-lg text-semibold text-center leading-6 text-gray-600">
                  {customer.occupation}
                </h3>
                <p className="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">
                  {customer.detail_text}
                </p>
                <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                  <li className="flex items-center py-3 text-sm">
                    <span>Rating</span>
                    <span className="ml-auto">{customer.rating}</span>
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
