import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {useState, useEffect} from 'react' ;
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App  ()  {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("username");
    setIsLoggedIn(!!user);
  }, []);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/> } />
        <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} /> } />
        <Route path="/home" element={ <Home /> } />

      </Routes>
    </Router>
 
  );
}

export default App;