import { useState, useEffect } from 'react';

// useFetch Hook接受一个URL作为参数，并返回数据、加载状态和错误信息
const useAPIFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]); // 依赖项数组中的URL确保了当URL变化时重新获取数据

  return { data, loading, error };
};

export default useAPIFetch;
