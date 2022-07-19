// INSTRUCTIONS FOR UPDATING AND PUSHING TO GITHUB PAGES
  // 1. Save changes
  // 2. in terminal: 'npm run build'
  // 3. in terminal: 'npm run deploy'
    // this should push build changes to gh-pages branch and update page soon after
      // wait for the jobs in "Actions" to finish running



// components imported
import NavBar from './NavBar.js';
import Heading from './Heading.js';
import {TechMenu_Parent} from './TechMenu/TechMenu-Parent.js';

// imported styles
import './App.css';
import './NavBar.css';
import './Heading.css';
import './TechMenu/styles/TechMenu-Parent.css';
import React from 'react';





export class App extends React.Component {
  render() {
    return(
      <div className="App">

      <Heading />

      <NavBar />

      <header className="App-header">

          <TechMenu_Parent />

      </header>
    </div>
    );
  }
};

