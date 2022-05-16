import React from 'react';
import { fetchStories } from '../constants/api.constant';

export const useFetch = (category) => {
  const [stories, setStories] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    fetchStories(category).then(
      ({ data, success }) => {
        if (success) {
          setStories(data.map(({
              _id,
              type,
              by,
              time,
              dead,
              kids,
              descendants,
              score,
              title,
              url,
            }) => {
              const newtime = new Date(time * 1000);
              const timeString = newtime.toLocaleString('en-NG', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                timeZone: 'Africa/Lagos',
                second: 'numeric',
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
              });
              return {
                _id,
                type,
                by,
                timeString,
                score,
                title,
                url,
                dead,
                kids,
                descendants,
              };
            }
          )
          .sort((a, b) => {
            return new Date(b.timeString) - new Date(a.timeString);
          })
          )
        }
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
      
  }, [category]);

  return { stories, loading, error };
};
