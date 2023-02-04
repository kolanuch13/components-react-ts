"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const react_1 = __importStar(require("react"));
const material_1 = require("@mui/material");
const Add_1 = __importDefault(require("@mui/icons-material/Add"));
const Modal_1 = require("Modal");
const AddForm_1 = require("AddForm");
const Header_styled_1 = require("./Header.styled");
const Header = () => {
    const [openModal, setOpenModal] = (0, react_1.useState)(false);
    const openModalFormAdd = () => {
        setOpenModal((prev) => !prev);
    };
    const closeModalAddForm = () => {
        setOpenModal((prev) => !prev);
    };
    return (<material_1.Box sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
        }}>
      {openModal && (<Modal_1.Modal closeModal={closeModalAddForm}>
          <AddForm_1.AddForm />
        </Modal_1.Modal>)}

      <Header_styled_1.StyledIconButton aria-label="add information" sx={{ backgroundColor: "green", color: "#fff" }} onClick={openModalFormAdd}>
        <Add_1.default />
      </Header_styled_1.StyledIconButton>
    </material_1.Box>);
};
exports.Header = Header;
//# sourceMappingURL=Header.jsx.map