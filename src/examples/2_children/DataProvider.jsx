import React, { useEffect, useState } from "react";

export const DataProvider = ({ url, children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, [url]);

  return <>{children(data)}</>;
};
