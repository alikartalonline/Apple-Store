import React from 'react'
import { useAuth } from '../contexts/AuthContext';
import './profile.css'
import { useNavigate } from "react-router-dom";

function Profile() {

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(() => {
            navigate("/", { replace: true });
        });
    }

  return (
    <div>
        <h3>E-Mail: { JSON.stringify(user.email)  } </h3>
        <h3>Password: { JSON.stringify(user.password)  } </h3>
        <button 
        className='btn btn-dark'
        onClick={handleLogout}
        >Log Out
        </button>
    </div>
  )
}

export default Profile;