import React from 'react';
import useFetch from './useAPIFetch'; // 确保路径正确

const DataComponent = ({ url }) => {

  const { data, loading, error } = useFetch(url);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <pre>USD:{JSON.stringify(
                   JSON.parse(
                        JSON.stringify(data, null, 2)).bpi.USD.rate)}</pre>
    </div>
  );
};

export default DataComponent;