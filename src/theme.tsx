import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/themeSelector';

import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const themeSettings: any = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#000',
          },
          background: {
            default: '#bab6b693',
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#fff',
          },
          background: {
            default: '#000000',
          },
        }),
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  spacing: ['auto', 0, 2, 4, 8, 16, 32, 64, 128],
});

export const useMode: any = () => {
  const myTheme: string = useSelector(selectTheme);

  const theme = useMemo(() => createTheme(themeSettings(myTheme)), [myTheme]);

  return [theme];
};
