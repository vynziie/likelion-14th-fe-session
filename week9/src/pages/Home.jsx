import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <div style={{ padding: '50px', color: 'white', backgroundColor: '#141414', height: '100vh' }}>
      <h1>홈</h1>
      <p>{user?.email}님, 환영합니다.</p>
      <button onClick={handleLogout} style={{ padding: '10px 20px', background: 'white', color: 'black' }}>
        로그아웃
      </button>
    </div>
  );
}