"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalWindow = exports.Backdrop = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Backdrop = styled_components_1.default.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
`;
exports.ModalWindow = styled_components_1.default.div `
  position: relative;
  padding: 20px;
  max-width: calc(100vw - 100px);
  max-height: calc(100vh - 24px);
  background-color: rgba(120, 188, 240, 0.9);
  border-radius: 6px;
`;
//# sourceMappingURL=Modal.styled.js.map