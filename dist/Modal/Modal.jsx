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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
const react_1 = __importStar(require("react"));
const react_dom_1 = require("react-dom");
const Modal_styled_1 = require("./Modal.styled");
const Modal = (props) => {
    (0, react_1.useEffect)(() => {
        const closeByEsc = ({ code }) => {
            if (code === 'Escape') {
                props.closeModal();
            }
        };
        window.addEventListener('keydown', closeByEsc);
        return () => {
            window.removeEventListener('keydown', closeByEsc);
        };
    }, [props, props.closeModal]);
    const closeByBackdrop = (event) => {
        if (event.target === event.currentTarget) {
            props.closeModal();
        }
    };
    const modalRoot = document.querySelector('#modal-root');
    return (0, react_dom_1.createPortal)(<Modal_styled_1.Backdrop onClick={closeByBackdrop}>
      <Modal_styled_1.ModalWindow>{props.children}</Modal_styled_1.ModalWindow>
    </Modal_styled_1.Backdrop>, modalRoot);
};
exports.Modal = Modal;
//# sourceMappingURL=Modal.jsx.map