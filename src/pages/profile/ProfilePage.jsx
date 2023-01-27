import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

const ProfilePage = ({ user }) => {

    const location = useLocation();
    const navigate = useNavigate();
    console.log('we are in route: ', location.pathname);

    return (
        <div>
            <h1>Your Profile</h1>

            <button onClick={ () => navigate('/tasks') }>
                    Go to tasks
            </button>
            
            <button onClick={ () => navigate(-1) }>
                    Go back
            </button>
        </div>
    );
}

export default ProfilePage;
