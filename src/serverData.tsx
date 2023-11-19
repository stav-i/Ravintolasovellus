import React, { useState, useEffect } from 'react';
import { Interface } from 'readline';

interface Data {
  message: string;
}

interface Data2 {
  message: string;
}

const ServerData: React.FC = () => {
  const [data, setData] = useState<Data>({ message: "" });
  const [data2, setData2] = useState<Data2>({ message:"" });

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((responseData: Data) => {
        setData(responseData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    fetch('/api/register')
      .then((response) => response.json())
      .then((responseData: Data2) => { 
        setData2(responseData); 
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Data from Server</h1>
      <p>{data.message}</p>

      
    </div>
  );
};

export default ServerData;



