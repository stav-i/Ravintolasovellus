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

export const editData = async (employeeData:any) => {
  const { id, ...dataWithoutId } = employeeData;

  try {
    const response = await axios.put(`http://localhost:3001/api/data/${id}`, dataWithoutId);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteData = async (id:any) => {
  const response = await axios.delete(`http://localhost:3001/api/data/${id}`);
  return response.data;
};

//Tomin testi
export const fetchData2 = async (userData: UserData) => {
  try {
    const response = await axios.post("http://localhost:3001/api/register", userData);
    return response;
  } catch (error) {
    return Promise.reject(error); // Return a rejected Promise
  }
};
//Tomin paras testi (login)
export const fetchData3 = async (userData: UserData) => {
  try {
    const response = await axios.post("http://localhost:3001/api/login", userData);
    return response;
  } catch (error) {
    return Promise.reject(error); // Return a rejected Promise
  }
};

export const addData2 = async (userData: UserData) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/register",
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
    const response = await axios.get('http://localhost:3001/api/getuserdata');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export interface UserData {
  username: string;
  password: string;
  repassword: string;
  admin?: string;
  henkilostoid?: string;
}
