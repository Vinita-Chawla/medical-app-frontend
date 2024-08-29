import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function FacebookSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get('token');
    const user = query.get('user');

    if (token && user) {
      localStorage.setItem('token', token);
      localStorage.setItem('user', decodeURIComponent(user));
      navigate('/');
    }
  }, [navigate]);

  return <div>Loading...</div>;
}

export default FacebookSuccess;

