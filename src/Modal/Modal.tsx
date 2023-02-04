import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalWindow } from './Modal.styled';

interface IModal {
  closeModal: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<IModal> = (props: IModal) => {
  useEffect(() => {
    const closeByEsc = ({ code }: KeyboardEvent): void => {
      if (code === 'Escape') {
        props.closeModal();
      }
    };

    window.addEventListener('keydown', closeByEsc);

    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, [props, props.closeModal]);

  const closeByBackdrop = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      props.closeModal();
    }
  };

  const modalRoot = document.querySelector('#modal-root') as HTMLElement;
  return createPortal(
    <Backdrop onClick={closeByBackdrop}>
      <ModalWindow>{props.children}</ModalWindow>
    </Backdrop>,
    modalRoot
  );
};
