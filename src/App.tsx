
import ServerData from './serverData';
import { FC } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './customer_ui/Layout';
import Etusivu from './customer_ui/Etusivu';
import Sivu1 from './customer_ui/Sivu1';
import { CssBaseline } from '@mui/material';
import Sivu2 from './customer_ui/Sivu2';
import Sivu3 from './customer_ui/Sivu3';
import Cart from './customer_ui/Cart';
import Profile from './customer_ui/Profile';
import CreateProfile from './customer_ui/CreateProfile';
import StaffLayout from './staff_ui/StaffLayout';
import ManageOrders from './staff_ui/ManageOrders';
import ManageMeals from './staff_ui/ManageMeals';
import ManageStaff from './staff_ui/ManageStaff';
import ManageCustomers from './staff_ui/ManageCustomers';

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
  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Etusivu />} />
            <Route path='/sivu1' element={<Sivu1 />} />
            <Route path='/sivu2' element={<Sivu2 />} />
            <Route path='/sivu3' element={<Sivu3 />} />
            <Route path='/shoppingcart' element={<Cart />} />
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
      <ServerData />
    </ThemeProvider>

  );
}

export default App;
