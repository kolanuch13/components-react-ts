"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AddForm_1 = require("AddForm");
const material_1 = require("@mui/material");
function App() {
    return (<material_1.Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 3,
            backgroundColor: "#F9F8FD",
            width: "100vw",
            height: "100vh",
        }}>
      <AddForm_1.AddForm />
    </material_1.Box>);
}
exports.default = App;
//# sourceMappingURL=App.jsx.map