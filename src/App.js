import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';
import SignUpLogin from './components/logInAndSignUpPage/logInAndSignUpPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SignUpLogin" element={<SignUpLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
