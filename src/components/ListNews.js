import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/story.styles.css';
import Links from '../utils/Link';


const ListNews = ({ id, by, time, score, title, url, kids }) => {
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
     })
  return (
    <div className="listContainer" key={id}>
      <div className="list-link">
        <Links url={url} title={title} />
      </div>
      <div className="list-info">
        <span>{score} points</span> {'|'}
        <span>
          by{'  '}
          {by}{' '}
        </span>
        {'|'}
        <span>{timeString}</span>
        {'|'}
        <span>
          <Link to="/comment" state={{ from: kids }}>
            {`${kids && kids.length > 0 ? kids.length : 0} comments`}
          </Link>
        </span>
      </div>
    </div>
  );
};

ListNews.propTypes = {
  time: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  by: PropTypes.string.isRequired,
  score: PropTypes.number,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  kids: PropTypes.array.isRequired,
};

export default ListNews;
