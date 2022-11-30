import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import LoginPage from './Pages/LoginPage';
import SignUp from './Pages/SignUp';
import MyPage from './Pages/Mypage';
import { DataProvider } from './data/DataContext';


function App() {
  return (
    <DataProvider>
    <div className="App">
      <Routes>
        <Route path ='/' element={<Main />} />
        <Route path ='/login' element={<LoginPage />} />
        <Route path ='/mypage' element={<MyPage />} />
        <Route path ='/signup' element={<SignUp />} />
      </Routes>
    </div>
    </DataProvider>
  );
}

export default App;
