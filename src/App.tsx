import { useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { Header } from 'Header/Header';
import { Box } from '@mui/material';
import { Skeleton } from 'Skeleton';

function App() {
  const [theme] = useMode();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          // position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 3,
          // backgroundColor: '#F9F8FD',
          width: '100vw',
          // height: '100vh',
        }}
      >
        <Header />
        <Skeleton />
        <div>
          <p>Test TESToм поганяє 😎😉</p>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
