// imports
// =======================
import './App.css';
import Navbar from './components/Navbar';
// =======================

function App() {
  return (
    <div className="App">
      {/* 
        I should probably add some meta stuff here later
        <header className="App-header">
          
        </header>
      */}

      <div>
        <Navbar />
      </div>

      <div className="headers-container">
        <div className="main-container">
          <div className="header">
            <code>Hello, world.</code>
          </div>
          <div className="sub-header code">
            <code>coming soon</code>
          </div>
        </div>
      </div>

      <div>
        <footer className="footer">
          <code>
            <a href="https://github.com/vince1444" target="_blank" rel="noopener noreferrer">about me</a>
          </code>
        </footer>
      </div>
    </div>
  );
}

export default App;
