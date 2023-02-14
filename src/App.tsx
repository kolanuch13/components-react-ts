import { Routes, Route } from 'react-router-dom';
import { useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { Header } from 'Header/Header';
import { Box } from '@mui/material';
import { Skeleton } from 'Skeleton';
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
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />

            <Route path="skeleton" element={<Skeleton />} />
            <Route path="modal" element={<ModalPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <div>
          <p>Test TESToм поганяє 😎😉</p>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
