import { useEffect, useState } from "react";

const DataFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch("/data.json");
      const data = await res.json();
      setData(data);
        // console.log("data length",data.length);
    };
    fetchData();
  }, []);

  return { data, loading };
};

export default DataFetch;
