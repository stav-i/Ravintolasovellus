import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/data');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addData = async () => {
  try{
    const response = await axios.post('http://localhost:3001/api/data', {

  }); return response.data;
  } catch (error) {
    throw error;
  }
}

