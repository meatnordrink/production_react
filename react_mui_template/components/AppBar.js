import React from 'react';
import { Button, AppBar, Toolbar, IconButton, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';

function RenderAppBar(){
    // set up a hook for anchorEl
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
                    The PHQ9 is a tool for evaluating depression that has been clinically validated and is widely used by therapists. However, it's not an adequate diagnostic tool on its own. If you think you might be dealing with depression, we encourage you to consult with a quaified therapist.                 
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