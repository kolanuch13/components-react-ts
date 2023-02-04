"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleColorMode = void 0;
const react_1 = __importDefault(require("react"));
const ToggleColorMode = () => {
    const [mode, setMode] = react_1.default.useState('light');
    const colorMode = react_1.default.useMemo(() => ({
        toggleColorMode: () => {
            setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
        },
    }), []);
};
exports.ToggleColorMode = ToggleColorMode;
//# sourceMappingURL=ToggleColorMode.jsx.map