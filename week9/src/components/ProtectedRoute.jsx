import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute() {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // 조건이 true면 바로 /login 으로 리디렉션하며, replace로 히스토리를 덮어씌웁니다.
    return <Navigate to="/login" state={{ from: location.pathname }} replace />; 
  }

  // 중첩 라우트의 자식 컴포넌트 렌더링
  return <Outlet />; 
}