import PropTypes from 'prop-types';
import '../styles/comments.styles.css';
import { useFetchNestedComments } from './../Hooks/useFetchNestedItems';
import Loading from './../utils/Loading';

const Comment = ({ kids, id }) => {
  const { comment, loading, error } = useFetchNestedComments(kids);

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
    <article className="children" key={id}>
      {(comment || [])?.map(comnt => (
        <section className="grand-children" key={comnt.id}>
          <div className="grand-children-author">{comnt.by}</div>
          <p className="grand-children-text">{comnt.text}</p>
        </section>
      ))}
    </article>
  );
};

Comment.propTypes = {
  kids: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
};

export default Comment;
