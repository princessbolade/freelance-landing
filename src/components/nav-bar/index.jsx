import { Box } from "@mui/system";
import Logo from "../../assets/logo.svg";
import React from "react";
import { Button, Typography } from "@mui/material";

function Nav() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: "100px",
        py: "20px",
        mt: "20px",
        backgroundColor: "#FFFFFF",
        borderRadius: "50px",
        mx: "auto",
        maxWidth: "1200px",
      }}
    >
      <img src={Logo} alt="" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          width: "50%",
          alignItems: "center",
        }}
      >
        <Typography
          variant="p"
          sx={{ fontSize: "20px", color: "#1E88E5", mr: "25px" }}
        >
          Home
        </Typography>
        <Typography variant="p" sx={{ fontSize: "20px", mr: "25px" }}>
          Find Work
        </Typography>
        <Typography variant="p" sx={{ fontSize: "20px", mr: "25px" }}>
          Find Freelancers
        </Typography>
        <Typography variant="p" sx={{ fontSize: "20px", mr: "25px" }}>
          Log In
        </Typography>
        <Typography variant="p" sx={{ fontSize: "20px", mr: "10px" }}>
          Sign Up
        </Typography>
      </Box>
      <Button
        sx={{
          fontSize: "20px",
        }}
      >
        Post a project
      </Button>
    </Box>
  );
}

export default Nav;
