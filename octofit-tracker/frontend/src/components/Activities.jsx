import { useEffect, useState } from 'react';
import { toList } from '../config/api';

function Activities() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
  const endpoint = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/activities`
    : 'http://localhost:8000/api/activities';

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(endpoint);
        const payload = await response.json();
        setItems(toList(payload));
      } catch {
        setError('Unable to load activities');
      }
    };

    void fetchItems();
  }, [endpoint]);

  return (
    <section>
      <h2>Activities</h2>
      {error ? <p>{error}</p> : null}
      <ul>{items.map((item, index) => <li key={item.id ?? index}>{JSON.stringify(item)}</li>)}</ul>
    </section>
  );
}

export default Activities;
