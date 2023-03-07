import { useDispatch } from 'react-redux';
import { toggleTheme } from 'redux/theme/themeSlice';

import { useTheme } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

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
        bgcolor: 'transparent',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {/* {currentTheme} mode */}
      <IconButton
        sx={{ ml: 1, backgroundColor: 'transparent' }}
        onClick={() => dispatch(toggleTheme())}
        color="inherit"
      >
        {currentTheme === 'dark' ? (
          <NightlightRoundIcon sx={{ color: 'yellow' }} />
        ) : (
          <WbSunnyIcon sx={{ color: 'yellow' }} />
        )}
      </IconButton>
    </Box>
  );
};
