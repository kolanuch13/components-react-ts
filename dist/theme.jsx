"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMode = void 0;
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const themeSelector_1 = require("redux/theme/themeSelector");
const styles_1 = require("@mui/material/styles");
const themeSettings = (mode) => ({
    palette: Object.assign({ mode }, (mode === 'light'
        ? {
            primary: {
                main: '#000',
            },
            background: {
                default: '#bab6b693',
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
const useMode = () => {
    const myTheme = (0, react_redux_1.useSelector)(themeSelector_1.selectTheme);
    const theme = (0, react_1.useMemo)(() => (0, styles_1.createTheme)(themeSettings(myTheme)), [myTheme]);
    return [theme];
};
exports.useMode = useMode;
//# sourceMappingURL=theme.jsx.map