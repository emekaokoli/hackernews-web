import { useEffect, useState } from 'react';
import { fetchStories } from '../constants/api.constant';

export const useFetchStories = (category, page, limit) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const getStories = async () => {
      try {
        const reponse = await fetchStories(category, page, limit);
        if (reponse.success) {
          setStories(reponse);
        }
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    getStories();
  }, [category, page, limit]);
  return {
    stories,
    error,
    loading,
  };
};
