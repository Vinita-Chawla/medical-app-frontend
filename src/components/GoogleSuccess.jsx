import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function GoogleSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const user = JSON.parse(decodeURIComponent(params.get('user')));

    if (token && user) {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
      navigate('/'); 
    } else {
      navigate('/login'); 
    }
  }, [navigate]);

  return <div>Loading...</div>; 
}

export default GoogleSuccess;
