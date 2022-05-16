import { fetchStory } from '../constants/api.constant';
import '../styles/story.styles.css';
import Link from '../utils/Link';

const ListNews = ({
  id,
  _id,
  by,
  time,
  timeString,
  score,
  title,
  url,
  dead,
  kids,
}) => {
  return (
    <div className="listContainer" key={_id}>
      <div className="list-link">
        <Link url={url} title={title} />
      </div>
      <div className="list-info">
        <span>{score} points</span> {'|'}
        <span>
          by{'  '}
          {by}{' '}
        </span>
        {'|'}
        <span className="m-2">{time}</span>
        {'|'}
        <span className="m-2">
          <Link
            url={fetchStory(id)}
            title={`${kids && kids.length > 0 ? kids.length : 0} comments`}
          />
        </span>
      </div>
    </div>
  );
};
export default ListNews;
