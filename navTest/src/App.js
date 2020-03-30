import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import { Button } from '@material-ui/core';


export default function BasicExample() {
  return (
      
<div>
        <Button component={Link} to="/dashboard" variant="contained" color="primary">
          To Dashboard
        </Button>

        <hr />
      
         <Route>
         <Route path="/dashboard">
            <Dashboard />
          </Route>
          </Route>
    </div>

  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

// You can think of these components as "pages"
// in your app.

// So - for my purposes, create each page as a class or function, and then call them within <App />.
// If that starts to be messy, could separate out each function, then import them all into a main.js or something.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}



function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
