import { Box, Container, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { fetchData, addData } from '../axios';
import '../App.css';
import { DataItem } from '../dbButtonFunction';




const Sivu1 = () => {
    const navigoi = useNavigate();
    const [data, setData] = useState<DataItem[]>([]);

    useEffect(() => {
      const fetchDataFromAPI = async () => {
        try {
          const apiData = await fetchData(); 
          setData(apiData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchDataFromAPI();
    }, []);

    return (
    
<Typography>
  <h1>Henkilökunta</h1>
  <button onClick={addData}>Add new</button>
  <div className="data-grid">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Etunimi</th>
          <th>Sukunimi</th>
          <th>Sähköposti</th>
          <th>Puhelin</th>
          <th>Työtehtävä</th>
          <th>Palkka</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.Etunimi}</td>
            <td>{item.Sukunimi}</td>
            <td>{item.Sahkoposti}</td>
            <td>{item.Puhelin}</td>
            <td>{item.Tyotehtava}</td>
            <td>{item.Palkka} €</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</Typography>
       
    )
}

export default Sivu1;