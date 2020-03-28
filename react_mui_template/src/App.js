import React from 'react';
import { Button, Grid, Typography, AppBar, Toolbar, IconButton, Paper, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
// import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
// import Chart from "react-apexcharts";
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';
// import { purple } from '@material-ui/core/colors';



function App() {
  return (
        // 

    <ThemeProvider theme={theme}>
    
      <RenderAppBar />

      <MakeQuestion 
        questions={questionsPHQ9}
        options={optionsPHQ9}
         />
    </ThemeProvider>

    
  );
}

export default App;