"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const theme_1 = require("./theme");
const material_1 = require("@mui/material");
const Header_1 = require("Header/Header");
const material_2 = require("@mui/material");
const Skeleton_1 = require("Skeleton");
const NotFoundPage_1 = __importDefault(require("pages/NotFoundPage"));
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
        <react_router_dom_1.Routes>
          <react_router_dom_1.Route path="/" element={<Skeleton_1.Skeleton />}/>
          <react_router_dom_1.Route path="header" element={<Header_1.Header />}/>
          <react_router_dom_1.Route path="*" element={<NotFoundPage_1.default />}/>
        </react_router_dom_1.Routes>
        
        <div>
          <p>Test TESToм поганяє 😎😉</p>
        </div>
      </material_2.Box>
    </material_1.ThemeProvider>);
}
exports.default = App;
//# sourceMappingURL=App.jsx.map