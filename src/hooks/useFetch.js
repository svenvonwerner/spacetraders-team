import { useEffect, useState } from 'react';

export default function useFetch(token) {
  const [data, setData] = useState([]);
  
  async function fetchData() {
    try {
      // const token = 'f4310eb4-0c1a-4f44-80aa-f10be7493ce6';
      const response = await fetch(
        'https://api.spacetraders.io/types/loans?token=' + token
      );
      const newData = await response.json();
      setData(newData.loans);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return [data];
}
