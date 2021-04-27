import { useState, useEffect } from 'react';
import axios from 'axios';

const useProperties = (params) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log(`params: `, params);
    try {
      (async () => {
        const properties = await axios.get(
          `http://localhost:3000/api/properties?sortBy=${params}`
        );
        setProperties(properties.data);
        setLoading(false);
      })();
    } catch (err) {
      console.log(err);
      setError(err);
    }
  }, [params]);
  return { properties, error, loading };
};

export default useProperties;
