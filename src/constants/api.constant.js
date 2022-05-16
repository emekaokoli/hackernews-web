export const API = '/news?category=';

// fetch api by story type
export const fetchStories = async(category) =>{
  const response = await fetch(`${API}${category}`);
  const { data, success } = await response.json()
  return { data, success }
}

// fetch api by story id
export const fetchStory = id =>
  fetch(`${API}/${id}`)
    .then(res => res.json())
    .then(story => ({
      ...story,
      timeString: new Date(story.time * 1000)
        .toLocaleString('en-NG', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
          timeZone: 'Africa/Lagos',
          second: 'numeric',
          day: 'numeric',
          month: 'numeric',
          year: 'numeric',
        })
    }));

// fetch api by search text
export const fetchSearch = text =>
  fetch(`${API}/search?q=${text}`)
    .then(res => res.json())
    .then(data =>
      data.map(story => ({
        ...story,
        timeString: new Date(story.time * 1000)
          .toLocaleString('en-NG', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            timeZone: 'Africa/Lagos',
            second: 'numeric',
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
          })
          .sort((a, b) => new Date(b.timeString) - new Date(a.timeString)),
      }))
    );

export const fetchMoreStories = (category, page) => {
  return fetch(`${API}${category}&page=${page}`)
    .then(res => res.json())
    .then(({ data, success }) => ({ data, success }));
};