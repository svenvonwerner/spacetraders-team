import { useEffect, useState } from 'react';

export default function useFetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const token = 'f4310eb4-0c1a-4f44-80aa-f10be7493ce6';
      const response = await fetch(
        'https://api.spacetraders.io/types/loans?token=' + token
      );
      const newData = await response.json();
      

      if (response.status === 200) {
        setData(newData);
        
      } else {
        console.error('ERROR');
      }
    }
    fetchData();
  }, []);
  return [data];
}
