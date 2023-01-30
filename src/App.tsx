import React from "react";
import { AddForm } from "AddForm";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
        backgroundColor: "#F9F8FD",
        width: "100vw",
        height: "100vh",
      }}
    >
      <AddForm />
    </Box>
  );
}

export default App;
