import ServerData from './serverData';
import { FC, useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './customer_ui/Layout';
import Etusivu from './customer_ui/Etusivu';
import Sivu1 from './customer_ui/Sivu1';
import Menu from './customer_ui/Menu';
import Sivu3 from './customer_ui/Sivu3';
import Cart from './customer_ui/Cart';
import Profile from './customer_ui/Profile';
import CreateProfile from './customer_ui/CreateProfile';
import StaffLayout from './staff_ui/StaffLayout';
import ManageOrders from './staff_ui/ManageOrders';
import ManageMeals from './staff_ui/ManageMeals';
import ManageStaff from './staff_ui/ManageStaff';
import ManageCustomers from './staff_ui/ManageCustomers';
import Login from './customer_ui/Login';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Etusivu />} />
            <Route path='/sivu1' element={<Sivu1 />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/sivu3' element={<Sivu3 />} />
            <Route path='/shoppingcart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
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
