import PropTypes from 'prop-types';
import '../styles/pagination.css';

function Pagination({
  page,
  setPage,
  pages,
  nextPage,
  prevPage,
  totalRecord,
}) {
  const prePage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextpage = () => {
    if (page > 0) {
      setPage(page + 1);
    }
  };

  return (
    <div className="pagination">
      <button
        className="item"
        onClick={prePage}
        disabled={page === 1 ? 'disabled' : ''}
      >
        Previous
      </button>

      <button disabled={page === pages ? 'disabled' : ''} onClick={nextpage}>
        Next
      </button>
      <label>
        page {page} of {pages}
      </label>
    </div>
  );
}
Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  pages: PropTypes.number,
  nextPage: PropTypes.number,
  prevPage: PropTypes.number,
  totalRecord: PropTypes.number,
};
export default Pagination;
