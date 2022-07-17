// INSTRUCTIONS FOR UPDATING AND PUSHING TO GITHUB PAGES
  // 1. Save changes
  // 2. in terminal: 'npm run build'
  // 3. in terminal: 'npm run deploy'
    // this should push build changes to gh-pages branch and update page soon after
      // wait for the jobs in "Actions" to finish running



// components imported
import NavBar from './NavBar.js';

// imported styles
import './App.css';
import './NavBar.css';
import './Heading.css';



function Heading() {
  return(
    <div className='heading'>
      <h1>Brandon Grando<br/>Full-Stack Developer</h1>
    </div>
  );
};



function App() {
  return (
    <div className="App">

      <Heading />

      <NavBar />

      <header className="App-header">
        <p>
          My Portfolio
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          Proficient in:
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React</li>
          </ul>
        </p>
      </header>
    </div>
  );
};



// exporting components
export default App;
