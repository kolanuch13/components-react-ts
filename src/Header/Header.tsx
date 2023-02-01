import React, { useState } from "react";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { Modal } from "Modal";
import { AddForm } from "AddForm";
import { StyledIconButton } from "./Header.styled";

export const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const openModalFormAdd = (): void => {
    setOpenModal((prev) => !prev);
  };

  const closeModalAddForm = (): void => {
    setOpenModal((prev) => !prev);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
      }}
    >
      {openModal && (
        <Modal closeModal={closeModalAddForm}>
          <AddForm />
        </Modal>
      )}

      <StyledIconButton
        aria-label="add information"
        sx={{ backgroundColor: "green", color: "#fff" }}
        onClick={openModalFormAdd}
      >
        <AddIcon />
      </StyledIconButton>
    </Box>
  );
};
