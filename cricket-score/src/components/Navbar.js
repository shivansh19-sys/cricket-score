import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {
  Button,
  IconButton,
 
  Toolbar,
  Typography
} from "@material-ui/core";


import { makeStyles } from "@material-ui/core";


const useStyle = makeStyles((theme) => {
  console.log("STYLE", theme);
});

const Navbar = () => {
  const classes = useStyle();

  return (
    <div>
      <AppBar color="primary" position="static" style={{ flexFlow: 1 }}>
        <Toolbar>
          <IconButton edge="start" color="inherit">
         
          </IconButton>

          <Typography variant="h6">Live Score </Typography>

         <span style={{ flexGrow : 2}}></span>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;