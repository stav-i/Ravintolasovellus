import { FC } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Etusivu from './pages/Etusivu';
import Sivu1 from './pages/Sivu1';
import { CssBaseline } from '@mui/material';
import Sivu2 from './pages/Sivu2';
import Sivu3 from './pages/Sivu3';
import Cart from './pages/Cart';
import Profile from './pages/Profile';

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
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
