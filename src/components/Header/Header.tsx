import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { SwitchMode } from 'components/SwitchMode';

export const Header: FC = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingX: 4,
          outline: '1px solid red',
          width: '100%',
        }}
      >
        <Box
          component="nav"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/modal">Modal</NavLink>
          <SwitchMode />
        </Box>
      </Box>
      <Outlet />
    </>
  );
};
