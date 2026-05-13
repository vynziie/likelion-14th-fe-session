import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';  

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    
    if (success) {
      // 로그인 성공 시 홈으로 이동 (replace를 사용하여 뒤로가기 방지)
      navigate('/home', { replace: true }); 
    } else {
      alert('로그인 정보를 다시 확인해주세요.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>로그인 정보를 입력하세요</h2> {/* [cite: 704] */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="이메일 주소"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">다음</button> {/* [cite: 706] */}
        </form>
      </div>
    </div>
  );
}