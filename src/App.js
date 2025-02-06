import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './home';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();
  return (
    <div className="App">
      
      {location.pathname !== '/home' && (
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link className="App-link" to="/home">
            Learn React
          </Link>
        </header>
      )
      
      }
      <main>
        <Routes>
          <Route path="/" element={<div>메인 페이지</div>} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;