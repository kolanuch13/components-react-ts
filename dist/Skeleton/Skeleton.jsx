"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skeleton = void 0;
const react_1 = __importDefault(require("react"));
const react_loader_spinner_1 = require("react-loader-spinner");
const material_1 = require("@mui/material");
const Skeleton = () => {
    return (<material_1.Box sx={{
            paddingTop: 2,
        }}>
      <react_loader_spinner_1.RotatingLines />
    </material_1.Box>);
};
exports.Skeleton = Skeleton;
//# sourceMappingURL=Skeleton.jsx.map