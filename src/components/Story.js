import { useEffect, useState } from 'react';
import { FormControl } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { useFetch } from '../Hooks/useFetch.hooks';
import Loading from '../utils/Loading';
import useDebounce from '../utils/useDebounce';
import ListNews from './ListNews';

const Story = () => {
  const { category } = useParams();

  const { stories, loading, error } = useFetch(category ? category : 'top');
  const [searchText, setSearchText] = useState('');
  const debouncedSearch = useDebounce(searchText, 500);
  const [filteredList, setFilteredList] = useState([...stories]);


  useEffect(() => {
    if (debouncedSearch) {
      const filtered = stories.filter(({ title }) =>
        title.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
      setFilteredList([...filtered]);
    } else {
      setFilteredList([...stories]);
    }
  }, [debouncedSearch, stories]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        {error}
      </div>
    );
  }
  return (
    <>
      <div className="search-story">
        <FormControl
          type="search"
          name={searchText}
          placeholder="Search news"
          className="m-2 w-25"
          aria-label="Search box"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
      </div>
      {filteredList.map(
        ({
          id,
          _id,
          type,
          by,
          timeString,
          dead,
          kids,
          descendants,
          score,
          title,
          url,
        }) => (
          <ListNews
            key={_id}
            _id={_id}
            id={id}
            type={type}
            by={by}
            time={timeString}
            dead={dead}
            kids={kids}
            descendants={descendants}
            score={score}
            title={title}
            url={url}
            timeString={timeString}
          />
        )
      )}
    </>
  );
};

export default Story;
