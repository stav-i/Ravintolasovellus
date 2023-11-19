import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/data');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addData = async (newEmployeeData:any) => {
  try{
    const response = await axios.post('http://localhost:3001/api/data', newEmployeeData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
     return response.data;
  } catch (error) {
    throw error;
  }
}

//Tomin testi
export const fetchData2 = async (userData: UserData) => {
  try {
    const response = await axios.post("http://localhost:3002/api/register", userData);
    return response;
  } catch (error) {
    return Promise.reject(error); // Return a rejected Promise
  }
};

export const addData2 = async (userData: UserData) => {
  try {
    const response = await axios.post(
      "http://localhost:3002/api/register",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchDatafromDatabase = async () => {
  try {
    const response = await axios.get('http://localhost:3002/api/register');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export interface UserData {
  username: string;
  password: string;
  repassword: string;
}
