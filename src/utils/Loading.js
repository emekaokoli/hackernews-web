import { Spinner } from 'react-bootstrap';

function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Spinner animation="border" variant="warning" />
    </div>
  );
}

export default Loading;
