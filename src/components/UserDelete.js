import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserService from '../services/UserService';

export default function UserDelete() {
  const { id } = useParams();
  const navigate = useNavigate();
  const userService = new UserService();

  useEffect(() => {
    const deleteUser = async () => {
      try {
        await userService.deleteUser(id);
        navigate('/');
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    };

    deleteUser();
  }, [id, navigate]);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Kullanıcı Siliniyor...</h1>
    </div>
  );
}
