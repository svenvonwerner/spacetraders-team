import { useEffect, useState } from 'react';

export default function useShips(token) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return [data];
}
