import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/login/Login';
import User from './pages/user-details/User';

function App() {

  return (
   <div>
     <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user" element={<User />} />
        </Routes>
     </Router>
   </div>
  );
}

export default App;
