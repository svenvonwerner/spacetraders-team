import { useState } from 'react';

export default async function useFetch() {
  const [ships, setShips] = useState([]);

  try {
    const token = 'f4310eb4-0c1a-4f44-80aa-f10be7493ce6';
    const response = await fetch(
      'https://api.spacetraders.io/systems/OE/ship-listings?token=' + token
    );
    const data = await response.json();
    setShips(data.shipListings);
  } catch (error) {
    console.error('ERROR:', error);
  }
}
