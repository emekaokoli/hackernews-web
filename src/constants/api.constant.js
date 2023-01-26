const API = '/news';

// fetch api by story type
export const fetchStories = async (category, page, limit) => {
  const response = await fetch(
    `${API}?category=${category}&page=${page}&limit=${limit}`
  );
  return await response.json();
};

// get kids id's
export const getNestedComments = async kids => {
  const promises = kids?.map(ids =>
    fetch(`https://hacker-news.firebaseio.com/v0/item/${ids}.json`).then(
      response => response.json()
    )
  );

  return await Promise.all(promises);
};
