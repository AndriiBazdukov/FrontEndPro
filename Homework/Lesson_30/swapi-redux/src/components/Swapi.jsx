import { useDispatch, useSelector } from 'react-redux';
import { fetchSwapi } from '../store/swapiReducer';
import { useState } from 'react';

export default function Swapi() {
  const [endpoint, setEndpoint] = useState('people/1');
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state);

  return (
    <div>
      <div style={{ display: 'flex', gap: 10 }}>
        <input
          value={endpoint}
          onChange={e => setEndpoint(e.target.value)}
          style={{ flex: 1 }}
        />
        <button onClick={() => dispatch(fetchSwapi(endpoint))}>
          Get info
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {data && (
        <pre style={{ marginTop: 20 }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}