import React from 'react';
import { Button, AppBar, Toolbar, IconButton, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default function RenderAppBar(){
    // set up a hook for anchor element
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
  
    const openMenu = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const closeMenu = () => {
      setAnchorEl(null);
    };
  
    const openDialog = () => {
      setOpen(true);
      closeMenu();
    }
  
    const closeDialog = () => {
      setOpen(false);
    }
  
    return (
      <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={openMenu} />
          <Menu
          id="help-menu"
          anchorEl={anchorEl}
          keepMounted //keepMounted is a property of Modal
          open={Boolean(anchorEl)} //exists based on the existence of anchorEl, set by openMenu and closeMenu
          onClose={closeMenu}
          >
            <MenuItem onClick={openDialog}>What is this?</MenuItem>
            <Dialog onClose={closeDialog} aria-labelledby="what-is-this" open={open}>
                <DialogTitle id="what-is-this">What is this?</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Recent research suggests that what you eat may have as much impact on your depression symptoms as medication or therapy. This section can help you figure out how to use what you eat to make you <b>feel better</b>.                
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={closeDialog} color="primary">
                    Close
                  </Button>   
                </DialogActions>
            </Dialog>
        </Menu>
        </IconButton>
      </Toolbar>
    </AppBar>
    )
  }