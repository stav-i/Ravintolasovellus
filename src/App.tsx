import ServerData from './serverData';
import { FC, useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './customer_ui/Layout';
import Etusivu from './customer_ui/Etusivu';
import Sivu1 from './customer_ui/Sivu1';
import Menu from './customer_ui/Menu';
import Cart from './customer_ui/Cart';
import Profile from './customer_ui/Profile';
import CreateProfile from './customer_ui/CreateProfile';
import StaffLayout from './staff_ui/StaffLayout';
import ManageOrders from './staff_ui/ManageOrders';
import ManageMeals from './staff_ui/ManageMeals';
import ManageStaff from './staff_ui/ManageStaff';
import ManageCustomers from './staff_ui/ManageCustomers';
import Login from './customer_ui/Login';
import { user } from './types';


const theme = createTheme({
  palette: {
    background: {
      default: "#f7f1f1",
    },
  },
  components: {
    MuiButton: {
      styleOverrides:{
        root: {
          textTransform: 'lowercase',
          color: '#000',
          },
      },
    }
  }
});

const App = () => {

  const [currentuser,setCurrentuser] = useState<user>({
    name: "new_user",
    role: 0
  });
  const setuser=(name: string, role: number) =>{
    setCurrentuser({
      name: name,
      role: role
    });
  }

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout currentuser={currentuser}/>}>
            <Route index element={<Etusivu />} />
            <Route path='/sivu1' element={<Sivu1 />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/shoppingcart' element={<Cart currentuser={currentuser} />} />
            <Route path='/login' element={<Login currentuser={currentuser} setuser={setuser}/>} />
            <Route path='/profile' element={<Profile currentuser={currentuser}/>} />
            <Route path='/createprofile' element={<CreateProfile />} />
          </Route>
        </Routes>

        <Routes>
          <Route element={<StaffLayout />}>
            <Route path='/managemeals' element={<ManageMeals />} />
            <Route path='/manageorders' element={<ManageOrders />} />
            <Route path='/managestaff' element={<ManageStaff />} />
            <Route path='/managecustomers' element={<ManageCustomers />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
