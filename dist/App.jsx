"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theme_1 = require("./theme");
const material_1 = require("@mui/material");
const Header_1 = require("Header/Header");
const material_2 = require("@mui/material");
const Skeleton_1 = require("Skeleton");
function App() {
    const [theme] = (0, theme_1.useMode)();
    return (<material_1.ThemeProvider theme={theme}>
      <material_1.CssBaseline />
      <material_2.Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 3,
            width: '100vw',
        }}>
        <Header_1.Header />
        <Skeleton_1.Skeleton />
        <div>
          <p>Test TESToм поганяє 😎😉</p>
        </div>
      </material_2.Box>
    </material_1.ThemeProvider>);
}
exports.default = App;
//# sourceMappingURL=App.jsx.map