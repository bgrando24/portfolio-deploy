// INSTRUCTIONS FOR UPDATING AND PUSHING TO GITHUB PAGES
  // 1. Save changes
  // 2. in terminal: 'run npm build'
  // 3. in terminal: 'run npm deploy'
    // this should push build changes to gh-pages branch and update page soon after




import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, world!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
