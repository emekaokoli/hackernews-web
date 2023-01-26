import { useLocation } from 'react-router-dom';
import '../styles/comments.styles.css';
import Loading from '../utils/Loading';
import { useFetchNestedComments } from './../Hooks/useFetchNestedItems';
import Comment from './Comment';

const Comments = () => {
  const location = useLocation();
  const { from: kids } = location?.state;
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
    <section className="comments-container">
      {kids && kids.length > 0 ? (
        <>
          {comment?.map(kid => (
            <article className="parent" key={kid.id}>
              <div className="author">{kid.by}</div>
              <p className="text">{kid.text}</p>
              {kid?.kids ? (
                <Comment key={kid.id} kids={kid?.kids} id={kid.id} />
              ) : null}
            </article>
          ))}
        </>
      ) : (
        <span>0 comments</span>
      )}
    </section>
  );
};

export default Comments;
