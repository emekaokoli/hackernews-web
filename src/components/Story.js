import { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchStories } from '../Hooks/useFetchStories';
import '../styles/story.styles.css';
import Loading from '../utils/Loading';
import useDebounce from '../utils/useDebounce';
import { DataContext } from './../context/store';
import ListNews from './ListNews';
import Pagination from './Pagination';

const Story = () => {
  const { category } = useParams();

  const { searchText } = useContext(DataContext);

  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const { stories, loading, error } = useFetchStories(
    category || 'top',
    page,
    limit
  );

  const { pages, nextPage, prevPage, totalRecord, data } = stories;

  const debouncedSearch = useDebounce(searchText, 500);
  const [filteredList, setFilteredList] = useState(data);

  useEffect(() => {
    if (debouncedSearch) {
      const filtered = data?.filter(({ title }) =>
        title.toLowerCase().includes(debouncedSearch.toLowerCase())
      );

      setFilteredList([...filtered]);
    } else {
      setFilteredList(data);
    }
  }, [debouncedSearch, data]);

  if (loading) {
    return (
      <div className="center-util">
        <Loading />
      </div>
    );
  }
  if (error) {
    return <div className="center-util">{error}</div>;
  }

  return (
    <section className="stories">
      <h4>Total count: {totalRecord}</h4>
      {filteredList
        ?.map(items => (
          <Fragment key={items._id}>
            <ListNews
              key={items._id}
              id={items._id}
              type={items.type}
              by={items.by}
              time={items.time}
              kids={items?.kids}
              score={items.score}
              title={items.title}
              url={items.url}
            />
          </Fragment>
        ))
        .sort((a, b) =>
          new Date(a.props.children.props.time * 1000)
            .toLocaleDateString('en-NG', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
              timeZone: 'Africa/Lagos',
              second: 'numeric',
              day: 'numeric',
              month: 'numeric',
              year: 'numeric',
            })

            .localeCompare(
              new Date(b.props.children.props.time * 1000).toLocaleDateString(
                'en-NG',
                {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                  timeZone: 'Africa/Lagos',
                  second: 'numeric',
                  day: 'numeric',
                  month: 'numeric',
                  year: 'numeric',
                }
              )
            )
        )}
      <Pagination
        limit={limit}
        page={page}
        setPage={setPage}
        totalRecord={totalRecord}
        pages={pages}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </section>
  );
};

export default Story;
