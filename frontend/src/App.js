// imports
// =======================
import './App.css';
import NavBar from './components/NavBar';
// =======================

function App() {
  return (
    <div className="App">
      {/* 
        I should probably add some meta stuff here later
        <header className="App-header">
          
        </header>
      */}

      
      <NavBar />
      

      <div className="main-container">
        <div className="header">
          <code>Hello</code>
          <code className="font-emphasis">, </code> 
          <code>world</code>
          <code className="font-emphasis">.</code>
        </div>
      </div>
     
      <div>
        <footer className="footer">
          <code>
            <a className="about-link" href="https://github.com/vince1444" target="_blank" rel="noopener noreferrer">about me</a>
          </code>
        </footer>
      </div>
    </div>
  );
}

export default App;
