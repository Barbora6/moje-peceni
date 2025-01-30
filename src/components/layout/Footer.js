import { Box, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "grey.200", padding: 2 }}>
      <Typography variant="caption" textAlign={"center"} component="p">
        @Barbora Smetanová
      </Typography>
    </Box>
  );
};
