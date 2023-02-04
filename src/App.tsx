import React from 'react';
import { Header } from 'Header/Header';
import { Box } from '@mui/material';
import { Skeleton } from 'Skeleton';
function App() {
  return (
    <Box
      sx={{
        position: 'relative',
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "center",
        // p: 3,
        // backgroundColor: "#F9F8FD",
        // width: "100vw",
        height: '100vh',
      }}
    >
      <Header />
      <Skeleton />
    </Box>
  );
}

export default App;
