// import React, { useEffect } from "react";
// import { createPortal } from "react-dom";
// import { Backdrop, ModalWindow } from "./Modal.styled";

// interface IModal {
//   closeModal: () => void;
//   children: React.ReactNode;
// }

// export const Modal: React.FC<IModal> = ({ closeModal, children }) => {
//   useEffect(() => {
//     const closeByEsc = ({ code }: React.KeyboardEvent) => {
//       if (code === "Escape") {
//         closeModal();
//       }
//     };

//     window.addEventListener("keydown", closeByEsc);

//     return () => {
//       window.removeEventListener("keydown", closeByEsc);
//     };
//   }, [closeModal]);

//   const closeByBackdrop = (event: React.MouseEvent) => {
//     if (event.target === event.currentTarget) {
//       closeModal();
//     }
//   };

//   const modalRoot = document.querySelector("#modal-root") as HTMLElement;
//   return createPortal(
//     <Backdrop onClick={closeByBackdrop}>
//       <ModalWindow>{children}</ModalWindow>
//     </Backdrop>,
//     modalRoot
//   );
// };
