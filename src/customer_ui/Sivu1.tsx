import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { fetchData, addData } from '../axios';

export interface DataItem {
  id: number;
  Etunimi: string;
  Sukunimi: string;
  Sahkoposti: string;
  Puhelin: number;
  Tyotehtava: string;
  Palkka: Float32Array;
}

const Sivu1 = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    Etunimi: '',
    Sukunimi: '',
    Sahkoposti: '',
    Puhelin: 0,
    Tyotehtava: '',
    Palkka: 0.0,
  });

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  const handleAddEmployee = async () => {
    try {
      await addData(newEmployee);
      // Fetch updated data to refresh the employee list
      const updatedData = await fetchData();
      setData(updatedData);
      // Reset the form and hide it
      setNewEmployee({
        Etunimi: '',
        Sukunimi: '',
        Sahkoposti: '',
        Puhelin: 0,
        Tyotehtava: '',
        Palkka: 0.0,
      });
      setShowForm(false);
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

return (
  <Typography>
      <h1>Henkilökunta</h1>

      <Button variant="contained" onClick={toggleForm}>
        {showForm ? 'Sulje lomake' : 'Lisää työntekijä'}
      </Button>

      {showForm && (
        <div>
          <h2>Lisää uusi työntekijä</h2>
          <form>
            <TextField
              label="Etunimi"
              name="Etunimi"
              value={newEmployee.Etunimi}
              onChange={handleInputChange}
            />

            <TextField
              label="Sukunimi"
              name="Sukunimi"
              value={newEmployee.Sukunimi}
              onChange={handleInputChange}
            />

            <TextField
              label="Sähköposti"
              name="Sahkoposti"
              value={newEmployee.Sahkoposti}
              onChange={handleInputChange}
            />
            
            <TextField
              label="Puhelin"
              name="Puhelin"
              value={newEmployee.Puhelin}
              onChange={handleInputChange}
            />
            
            <TextField
              label="Työtehtävä"
              name="Tyotehtava"
              value={newEmployee.Tyotehtava}
              onChange={handleInputChange}
            />

            <TextField
              label="Palkka"
              name="Palkka"
              value={newEmployee.Palkka}
              onChange={handleInputChange}
            />

            <Button variant="contained" onClick={handleAddEmployee}>
              Lisää työntekijä
            </Button>
          </form>
        </div>
      )}

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
            <Button variant='contained'>Edit</Button>
            <Button variant='contained'>Delete</Button>
          </tr> ))}
        </tbody>
      </table>
    </div>
  </Typography>
  );
};

export default Sivu1;