"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMode = exports.ColorModeContext = void 0;
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const styles_1 = require("@mui/material/styles");
const themeSlice_1 = require("redux/theme/themeSlice");
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
    const dispatch = (0, react_redux_1.useDispatch)();
    const [mode, setMode] = (0, react_1.useState)('light');
    const colorMode = (0, react_1.useMemo)(() => ({
        toggleColorMode: () => {
            setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
            dispatch((0, themeSlice_1.toggleTheme)());
        },
    }), [dispatch]);
    const theme = (0, react_1.useMemo)(() => (0, styles_1.createTheme)(themeSettings(mode)), [mode]);
    return [theme, colorMode];
};
exports.useMode = useMode;
//# sourceMappingURL=theme.jsx.map