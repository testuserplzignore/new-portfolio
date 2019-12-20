import {useState, useEffect} from "react";
import api from "./api";

export default (query) => () => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await api.getEntries(query);
      
      setResponse(res);
      setLoading(false);
    })();
  }, []);
  return [response, loading]
}
