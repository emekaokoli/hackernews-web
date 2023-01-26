import { useEffect, useState } from 'react';
import { getNestedComments } from './../constants/api.constant';

export const useFetchNestedComments = (kids) => {
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getNestedComments(kids)
      .then(data => {
        if (data) {
          setComment(data);
        }
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [kids]);

  return { comment, loading, error };
};
