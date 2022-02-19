import { useEffect, useState } from 'react';

export default function useShips(token) {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      
      const response = await fetch(
        'https://api.spacetraders.io/systems/OE/ship-listings?token=' + token
      );
      const newData = await response.json();
      setData(newData.shipListings);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return [data];
}
