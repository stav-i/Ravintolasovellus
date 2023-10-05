import React, { useState, useEffect } from 'react';

interface Data {
  message: string;
}

function ServerData() {
  const [data, setData] = useState<Data>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((responseData: Data) => {
        setData(responseData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Data from Server</h1>
      <p>{data.message}</p>
    </div>
  );
}

export default ServerData;