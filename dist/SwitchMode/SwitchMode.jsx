"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwitchMode = void 0;
const react_redux_1 = require("react-redux");
const themeSlice_1 = require("redux/theme/themeSlice");
const styles_1 = require("@mui/material/styles");
const material_1 = require("@mui/material");
const Brightness4_1 = __importDefault(require("@mui/icons-material/Brightness4"));
const Brightness7_1 = __importDefault(require("@mui/icons-material/Brightness7"));
const SwitchMode = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const theme = (0, styles_1.useTheme)();
    const currentTheme = theme.palette.mode;
    return (<material_1.Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
            borderRadius: 1,
            p: 3,
        }}>
      {currentTheme} mode
      <material_1.IconButton sx={{ ml: 1 }} onClick={() => dispatch((0, themeSlice_1.toggleTheme)())} color="inherit">
        {currentTheme === 'dark' ? <Brightness7_1.default /> : <Brightness4_1.default />}
      </material_1.IconButton>
    </material_1.Box>);
};
exports.SwitchMode = SwitchMode;
//# sourceMappingURL=SwitchMode.jsx.map