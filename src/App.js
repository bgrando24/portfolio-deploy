// INSTRUCTIONS FOR UPDATING AND PUSHING TO GITHUB PAGES
  // 1. Save changes
  // 2. in terminal: 'npm run build'
  // 3. in terminal: 'npm run deploy'
    // this should push build changes to gh-pages branch and update page soon after
      // wait for the jobs in "Actions" to finish running



// components imported
import NavBar from './NavBar.js';
import Heading from './Heading.js';
import TechMenu from './TechMenu.js';

// imported styles
import './App.css';
import './NavBar.css';
import './Heading.css';
import './TechMenu.css';







function App() {
  return (
    <div className="App">

      <Heading />

      <NavBar />

      <header className="App-header">

          <TechMenu />

      </header>
    </div>
  );
};



// exporting components
export default App;
