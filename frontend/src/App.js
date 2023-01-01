import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';
// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { LoginDetails } from './pages/Login';
import { SignupDetails } from './pages/Signup';

function App() {
const {user}=useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={user? <Home />:<Navigate to="/login" />} 
            />
            <Route 
              path="/login" 
              element={!user?<LoginDetails />:<Navigate to="/"/>} 
            />
            <Route 
              path="/signup" 
              element={!user?<SignupDetails />:<Navigate to="/"/>} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

