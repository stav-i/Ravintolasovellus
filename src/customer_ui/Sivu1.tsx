import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { fetchData, addData, deleteData, editData } from '../axios';

export interface DataItem {
  id: number;
  Etunimi: string;
  Sukunimi: string;
  Sahkoposti: string;
  Puhelin: number;
  Tyotehtava: string;
  Palkka: number;
}

const Sivu1 = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<number | null>(null);
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

    if (!showForm) {
      setNewEmployee({
        Etunimi: '',
        Sukunimi: '',
        Sahkoposti: '',
        Puhelin: 0,
        Tyotehtava: '',
        Palkka: 0.0,
      });
      setEditingEmployee(null);
    }
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

  const handleInputChange = (id: number | null) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prevData) =>
      prevData.map((item) =>
        id !== null && item.id === id ? { ...item, [name]: value } : item
      )
    );
  
    if (id === null) {
      setNewEmployee((prevNewEmployee) => ({
        ...prevNewEmployee,
        [name]: value,
      }));
    }
  };

  const handleAddEmployee = async () => {
    try {
      await addData(newEmployee);
      const updatedData = await fetchData();
      setData(updatedData);
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

  const handleSaveEdit = async (id: number) => {
    try {
      const employeeToEdit = data.find((item) => item.id === id);
      if (employeeToEdit) {
        await editData(employeeToEdit);
        setEditingEmployee(null);
      } else {
        console.error('Employee not found for editing');
      }
    } catch (error) {
      console.error('Error editing employee:', error);
    }
  };

  const handleDeleteEmployee = async (id: number) => {
    try {
      await deleteData(id);

      const updatedData = await fetchData();
      setData(updatedData);
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <Typography>
      <h1>Henkilökunta</h1>

      <Button variant='contained' onClick={toggleForm}>
        {showForm?'Piilota lomake' : 'Lisää työntekijä'}
      </Button>

      {showForm && (
        <div>
          <h2>Lisää uusi työntekijä</h2>
          <form>
            <TextField
              label="Etunimi"
              name="Etunimi"
              value={newEmployee.Etunimi}
              onChange={(e) => handleInputChange(null)(e)}
            />

            <TextField
              label="Sukunimi"
              name="Sukunimi"
              value={newEmployee.Sukunimi}
              onChange={(e) => handleInputChange(null)(e)}
            />

            <TextField
              label="Sähköposti"
              name="Sahkoposti"
              value={newEmployee.Sahkoposti}
              onChange={(e) => handleInputChange(null)(e)}
            />

            <TextField
              label="Puhelin"
              name="Puhelin"
              value={newEmployee.Puhelin}
              onChange={(e) => handleInputChange(null)(e)}
            />

            <TextField
              label="Työtehtävä"
              name="Tyotehtava"
              value={newEmployee.Tyotehtava}
              onChange={(e) => handleInputChange(null)(e)}
            />

            <TextField
              label="Palkka"
              name="Palkka"
              value={newEmployee.Palkka}
              onChange={(e) => handleInputChange(null)(e)}
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
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  {editingEmployee === item.id ? (
                    <input
                      type="text"
                      name="Etunimi"
                      value={item.Etunimi}
                      onChange={handleInputChange(item.id)}
                    />
                  ) : (
                    item.Etunimi
                  )}
                </td>
                <td>
                  {editingEmployee === item.id ? (
                    <input
                      type="text"
                      name="Sukunimi"
                      value={item.Sukunimi}
                      onChange={handleInputChange(item.id)}
                    />
                  ) : (
                    item.Sukunimi
                  )}
                </td>
                <td>
                  {editingEmployee === item.id ? (
                    <input
                      type="text"
                      name="Sahkoposti"
                      value={item.Sahkoposti}
                      onChange={handleInputChange(item.id)}
                    />
                  ) : (
                    item.Sahkoposti
                  )}
                </td>
                <td>
                  {editingEmployee === item.id ? (
                    <input
                      type="text"
                      name="Puhelin"
                      value={item.Puhelin}
                      onChange={handleInputChange(item.id)}
                    />
                  ) : (
                    item.Puhelin
                  )}
                </td>
                <td>
                  {editingEmployee === item.id ? (
                    <input
                      type="text"
                      name="Tyotehtava"
                      value={item.Tyotehtava}
                      onChange={handleInputChange(item.id)}
                    />
                  ) : (
                    item.Tyotehtava
                  )}
                </td>
                <td>
                  {editingEmployee === item.id ? (
                    <input
                      type="text"
                      name="Palkka"
                      value={item.Palkka}
                      onChange={handleInputChange(item.id)}
                    />
                  ) : (
                    `${item.Palkka} €`
                  )}
                </td>
                <td>
                  {editingEmployee === item.id ? (
                    <button onClick={() => handleSaveEdit(item.id)}>
                      Save
                    </button>
                  ) : (
                    <button onClick={() => setEditingEmployee(item.id)}>
                      Edit
                    </button>
                  )}
                </td>
                <td>
                  <button onClick={() => handleDeleteEmployee(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Typography>
  );
};

export default Sivu1;