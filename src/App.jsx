import logo from './logo.svg';
import './App.css';
import PrimerComponente from './components/PrimerComponente'
import SegundoComponente from './components/SegundoComponente'
import TercerComponent from './components/TercerComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Agencia de <code>Marketing</code> Pengrafic.
        </p>
        <a
          className="App-link"
          href="https://pengrafic.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h3>SALUDOS PENGRAFIC</h3>
        <PrimerComponente />
        <SegundoComponente />
        <TercerComponent />
        
      </header>
      
      
    </div>
  );
}

export default App;
