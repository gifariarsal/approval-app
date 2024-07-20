import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

function App() {
  const isLogin = localStorage.getItem('access_token');

  if (!isLogin) {
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>;
  }

  return (
    <>
      <Routes>
        <Route path="/masuk" element={<h1>masuk</h1>} />
      </Routes>
    </>
  );
}

export default App;
