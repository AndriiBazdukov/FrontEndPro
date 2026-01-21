import { useDispatch } from 'react-redux';
import { clearData } from '../store/swapiReducer';

export default function Footer() {
  const dispatch = useDispatch();

  return (
    <footer style={{ marginTop: 20 }}>
      <button
        style={{ background: '#f5b400' }}
        onClick={() => dispatch(clearData())}
      >
        Clear
      </button>
    </footer>
  );
}