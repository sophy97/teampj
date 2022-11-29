import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import LoginPage from './Pages/LoginPage';
import AddUser from './Pages/AddUser';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path ='/' element={<Main />} />
        <Route path ='/login' element={<LoginPage />} />
        <Route path ='/adduser' element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
