import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default props => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
        <Button component={Link} to="/">
          AppTransacciones
        </Button>
        <Button component={Link} to="/user">
          Create User
        </Button>
        <Button component={Link} to="/create">
          Create Table
        </Button>
      </Typography>
    </Toolbar>
  </AppBar>
);
