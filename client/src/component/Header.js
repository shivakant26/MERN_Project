import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography , Button } from "@mui/material";
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="header-bar">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <div className="menu_icon">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MERN STACK DEVELOPMENT
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};


export default Header;