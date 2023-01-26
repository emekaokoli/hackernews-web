import { FaSpinner } from 'react-icons/fa';
import '../styles/loading.css';
function Loading() {
  return (
    <div className="center-util">
      <FaSpinner icon="spinner" className="spinner" />
    </div>
  );
}

export default Loading;
