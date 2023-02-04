"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMode = exports.ColorModeContext = void 0;
const react_1 = require("react");
const styles_1 = require("@mui/material/styles");
const themeSettings = (mode) => ({
    palette: Object.assign({ mode }, (mode === 'light'
        ? {
            primary: {
                main: '#000',
            },
            background: {
                default: '#fff',
            },
        }
        : {
            primary: {
                main: '#fff',
            },
            background: {
                default: '#000000',
            },
        })),
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
exports.ColorModeContext = (0, react_1.createContext)({
    toggleColorMode: () => { },
});
const useMode = () => {
    const [mode, setMode] = (0, react_1.useState)('dark');
    const colorMode = (0, react_1.useMemo)(() => ({
        toggleColorMode: () => setMode(prev => (prev === 'light' ? 'dark' : 'light')),
    }), []);
    const theme = (0, react_1.useMemo)(() => (0, styles_1.createTheme)(themeSettings(mode)), [mode]);
    return [theme, colorMode];
};
exports.useMode = useMode;
//# sourceMappingURL=theme.jsx.map