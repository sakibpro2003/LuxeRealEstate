import { useState, useEffect } from 'react';

function Customer() {
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
      <ul>
        {customers.map(customer => (
          <li key={customer.ID}>
            <div>
              <h3>{customer['Customer Name']}</h3>
              <p>Rating: {customer.Rating}</p>
              <p>Username: {customer['Customer Username']}</p>
              {/* You can include the customer photo here if needed */}
              {/* <img src={customer['Customer Photo']} alt={customer['Customer Name']} /> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Customer;
