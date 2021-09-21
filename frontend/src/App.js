import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* 
        I should probably add some meta stuff here later
        <header className="App-header">
          
        </header>
      */}

      <div className="header">
        <code>Hello, world.</code>
        <div className="sub-header code">
          <code>coming soon</code>
        </div>
      </div>
      <div>
        <footer className="footer">
          <code>
            <a id="footer-link" href="https://github.com/vince1444" target="_blank" rel="noopener noreferrer">me</a>
          </code>
        </footer>
      </div>
    </div>
  );
}

export default App;
