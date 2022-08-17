import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './layouts/Navigation/Sidebar';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
