import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMode } from '../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { Header } from 'components/Header/Header';
import { Box, Typography  } from '@mui/material';
import { Skeleton } from 'components/Skeleton';
import NotFoundPage from 'pages/NotFoundPage';
import ModalPage from 'pages/ModalPage';
import HomePage from 'pages/HomePage';

function App() {
  const [theme] = useMode();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4,
          width: '100vw',
        }}
      >
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/" element={<Header />} />
          <Route path="/modal" element={<ModalPage />} />
          <Route path="/skeleton" element={<Skeleton />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Box>
          <Typography variant="h1">Test TESToм поганяє 😎😉</Typography>
        </Box>
        <ToastContainer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
