import React, { useEffect, useState } from "react";

const usefetch = (url,callback) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const Fetchdata = async () => {
      const response = await fetch(url);
      const jsondata = await response.json(callback);
      setData(jsondata);
    };
    Fetchdata()
  }, [url]);
};

export default usefetch;
