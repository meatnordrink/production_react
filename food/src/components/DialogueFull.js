import React from 'react';
import { Button, Dialog, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';

function RenderSuicideDialog() {
    const [open, setOpen] = React.useState(true);
  
    const closeDialog = () => {
      setOpen(false);
    }
    
    // could include more resources below, including for trans/lgbtq teens etc.; but worry that more text will simply dilute the message. Could also attempt to make it detect country and offer the appropriate resources; not sure how reliable that is.
    return(
      <Dialog fullscreen onClose={closeDialog} open={open}>
        <DialogContent>
          <DialogContentText>
            Suicidal thought or urges need to be taken seriously. We urge you to reach out to one of the resources below if you're feeling suicidal; there's help available <b>right now</b>.
          </DialogContentText>
          <DialogContentText>
            The <a href="http://www.crisistextline.org/" target="_blank" rel='noopener'>Crisis Text Line</a> is a service that operates 24/7, works anywhere in the US, Canada, or the UK, and is for any kind of crisis. A trained crisis volunteer will respond to your text quickly (usually in under 5 minutes). 
            <ul>
              <li>For the US, text <b>741741</b>.</li>
              <li>For Canada, text <b>686868</b>.</li>
              <li>For the UK, <b>85258</b>.</li>
            </ul>
          </DialogContentText>
          <DialogContentText>
            If you're outside the US, <a href="http://befrienders.org" target="_blank" rel='noopener'>Befrienders Worldwide</a> has links to hotlines throughout the world. They'll help connect you to someone who can listen in a supportive and nonjudgmental way. Click on the link now to be connected.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={closeDialog}>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    )
  }