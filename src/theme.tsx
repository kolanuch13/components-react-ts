import { createContext, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
// import { useLocalStorage } from 'react-use';
import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { toggleTheme } from 'redux/theme/themeSlice';

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
            default: '#fff',
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

export const ColorModeContext = createContext<{ toggleColorMode: () => void }>({
  toggleColorMode: () => {},
});

export const useMode: any = () => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState<'light' | 'dark'>('light'); //треба вставити значення через useSelector

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        // setMode(dispatch(toggleTheme()))
        setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
        dispatch(toggleTheme());
      },
    }),
    [dispatch]
  );

  const theme: any = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
