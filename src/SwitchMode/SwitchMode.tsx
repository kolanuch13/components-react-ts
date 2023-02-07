import { useDispatch } from 'react-redux';
import { toggleTheme } from 'redux/theme/themeSlice';

import { useTheme } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const SwitchMode: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const currentTheme = theme.palette.mode;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {currentTheme} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={() => dispatch(toggleTheme())}
        color="inherit"
      >
        {currentTheme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
};
