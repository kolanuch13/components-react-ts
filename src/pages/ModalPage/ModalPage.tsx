import { useState, FC } from 'react';
import { Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { AddForm } from 'AddForm';
import { Modal } from 'Modal';
import { StyledIconButton } from './ModalPage.styled';

const ModalPage: FC = () => {
  const [openModal, setOpenModal] = useState(false);

  const openModalFormAdd = (): void => {
    setOpenModal(prev => !prev);
  };

  const closeModalAddForm = (): void => {
    setOpenModal(prev => !prev);
  };

  return (
    <Box>
      {openModal && (
        <Modal closeModal={closeModalAddForm}>
          <AddForm />
        </Modal>
      )}
      <StyledIconButton
        aria-label="add information"
        sx={{ backgroundColor: 'green', color: '#fff' }}
        onClick={openModalFormAdd}
      >
        <AddIcon />
      </StyledIconButton>
    </Box>
  );
};

export default ModalPage;
