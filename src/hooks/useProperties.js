import { useState, useEffect } from 'react';
import axios from 'axios';

const useProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      (async () => {
        const properties = await axios.get(
          'http://localhost:3000/api/properties'
        );
        setProperties(properties.data);
        setLoading(false);
      })();
    } catch (err) {
      console.log(err);
      setError(err);
    }
  }, []);
  return { properties, error, loading };
};

export default useProperties;
